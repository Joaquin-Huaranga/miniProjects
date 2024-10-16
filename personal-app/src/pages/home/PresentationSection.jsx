import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Map} from "./Map.jsx"
import {useJsApiLoader} from "@react-google-maps/api";
import {mapOptions} from "./MapConfigurations.jsx";
import {Table} from "./Table.jsx";
import {FormatTime} from "./ExtraComponents/formatTime.jsx";
import {haversine} from "./ExtraComponents/haversineForm.jsx";

//(MIO) CONSTANTE CON DATOS SOBRE LAS COORDENADAS Y RADIO DE LA GEOCERCA
export const geofence_center ={
    lat : -12.169378,
    lng: -77.020962,
}
export const geofence_radius = 60

//CONSTANTE PARA COMPROBAR SI LA UBICACION DEL USUARIO ESTÁ DENTRO DE LA GEOCERCA
const isWithinGeofence = (userLocation) => {
    if (!userLocation) return false;
    const distance = haversine(userLocation.lat, userLocation.lng, geofence_center.lat, geofence_center.lng);
    return distance <= geofence_radius;
};

//COMPONENTE PRINCIPAL
export const PresentationSection = () => {
    const {isLoaded} = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey:mapOptions.googleMapApiKey
    });

    const [userLocation, setUserLocation] = useState(null);
    const [isInGeofence, setIsInGeofence] = useState(false);
    const [attendanceData, setAttendanceData] = useState({
        entries: Array(7).fill(null),
        exits: Array(7).fill(null),
        totals: Array(7).fill(null),
        lunches: Array(7).fill(null),
        totalTime:'',
        totalMinutes:'',
        totalLunch:''
    });

    const [status, setStatus] = useState('')
    const [time,setTime] = useState(0)
    const [intervalId,setIntervalId] = useState(null)
    const [entryTime,setEntryTime] = useState(null)

    //FUNCION PARA CONSEGUIR LA UBICACION DE USUARIO
    const handleGetLocation  =()=>{
        if (navigator.geolocation){
            setStatus('Buscando ubicacion...');
            // console.log('Buscando ubicacion...')
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude} = position.coords;
                setUserLocation({lat:latitude,lng:longitude});

            },
                (error)=>{
                    console.error("Error al obtener la geolocalizacion: ",error)
                })
        }else{
            console.error("Su navegador no cuenta con la geolocalizacion")
        }
    }

    //PARA AGREGAR LA HORA A LA TABLA
    const handleAttendance = (type) => {
        const currentHour = new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit' });
        const dayIndex = new Date().getDay();

        if (type==='entry'){
            setEntryTime(Date.now());
        }
        setAttendanceData(prevData => {
            const newEntries = type === 'entry' ? [...prevData.entries] : prevData.entries;
            const newExits = type === 'exit' ? [...prevData.exits] : prevData.exits;
            if (type === 'entry') {
                newEntries[dayIndex] = currentHour;
            } else {
                newExits[dayIndex] = currentHour;
            }
            return {
                ...prevData,
                entries: newEntries,
                exits: newExits,
            };
        });
    };

// USO DE LOS BOTONES DE MARCA Y SALIDA
    const handleButtonClick = () => {
        handleGetLocation();
        handleAttendance('entry');
    };

    const handleExitAttendance = () => {
        handleAttendance('exit');
        setStatus('Salida')
        setUserLocation(null)
        setIsInGeofence(false)

        if (intervalId){
            clearInterval(intervalId);
            setIntervalId(null);
            setTime(0)
        }

        const currentExitTime = Date.now();
        const timeSpent = Math.floor((currentExitTime-entryTime)/1000)
        const formattedTimeSpent = FormatTime(timeSpent)
        const dayIndex  = new Date().getDay();
        setAttendanceData(prevData =>{
            const newTotals = [...prevData.totals];
            newTotals[dayIndex] = formattedTimeSpent;

            return{
                ...prevData,
                totals: newTotals,
            }
        })
        //REGRESAR EL TIEMPO A 0
        setTimeout(() => {
            setStatus('');
        }, 1000);
    };

    //USO DE EFECTO DEPENDIENDO DE SI EL USUARIO ESTÁ DENTRO O NO DE LA GEOCERCA
    useEffect(() => {
        if (userLocation) {
            const withinGeofence = isWithinGeofence(userLocation);
            setIsInGeofence(withinGeofence);
            setStatus(withinGeofence ? 'Acceso Correcto' : 'Fuera del rango');
            // console.log("user coords", userLocation)
        }
    }, [userLocation]);

    //EFECTO PARA COMENZAR LA CUENTA DEL CRONOMETRO SOLO SI EL USUARIO SE MANTIENE DENTRO DE LA GEOCERCA
    useEffect(() => {
        if (isInGeofence) {
            // Iniciar el cronómetro
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id);
        } else {
            // Detener el cronómetro si el usuario sale de la geocerca
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null);
            }
        }

        return () => {
            // Limpiar el intervalo al desmontar el componente
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isInGeofence]);



    return (
        <Container>
                <center>
                    <ButtonGroup>
                    <ButtonAssist onClick={handleButtonClick}>
                        Marcar Asistencia
                    </ButtonAssist>
                    <StatusMessage><p>{status}</p></StatusMessage>
                    <ButtonExit onClick={handleExitAttendance}>
                        Marcar Salida
                    </ButtonExit>
                    </ButtonGroup>
                    {isInGeofence && <Timer>{FormatTime(time)}</Timer>}
                </center>
            <Map isLoaded = {isLoaded} userLocation = {userLocation}/>

            <Table attendanceData={attendanceData}/>
        </Container>
    );
};

const Container = styled.div`
    max-width: 80%;
    margin-left: 10%;
    margin-right: 10%;
`;

const ButtonGroup = styled.div`
    margin: 2em;
`;


const ButtonAssist = styled.button`

    padding: 1em;
    font-size: 1.4em;
    font-weight: bolder;
    font-family: "Bell MT";
    border-color: blue;
    border-radius: 2em;
    background-color: white;
    color: blue;
    
    &:hover{
        background-color: blue;
        color: white;
        border-color: white;
    }
`;

const ButtonExit = styled.button`
    padding: 1em;
    font-size: 1.4em;
    font-weight: bolder;
    font-family: "Bell MT";
    border-color: blue;
    border-radius: 2em;
    background-color: white;
    color: blue;
    
    &:hover{
        background-color: blue;
        color: white;
        border-color: white;
    }
`;
const Timer = styled.div`
    max-width: 10%;
    width: 100%;
    border: 0.2em solid white;
    background-color: black;
    margin: 1em;
    font-size: 1.5em;
    color: white;
`;
const StatusMessage = styled.button`
    
    width: 16.5%;
    border: 0.3em solid black;
    background-color: white;
    border-radius: 2em;
    padding: 1em;
    margin: 1em;
    color: black;
    p{
        font-size: 1.4em;
        font-weight: bold;
        font-family: "Bell MT";
    }

`;
