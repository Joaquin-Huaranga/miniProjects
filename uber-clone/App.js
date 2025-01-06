import * as React from "react";
import * as Location from "expo-location";
import { StyleSheet, View } from 'react-native';
import MapView,{Marker,Polyline} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions"

const GOOGLE_MAPS_API_KEY = "AIzaSyDttA-IgTnTzFSTlQqgx4iNPV23BUrT_Qc";

export default function App() {


  const [origin, setOrigin] = React.useState({
    latitude:-12.169365,
    longitude: -77.020883,
  });

  const [destination, setDestination] = React.useState({
    latitude:-12.165594,
    longitude: -76.974700,
  });

  async function getLocationPermission (){
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status!=='granted'){
            alert('Permission Denied');
            return;
        }
        let location = await  Location.getCurrentPositionAsync({});
        const current ={
            latitude: location.coords.latitude,
            longitude: location.coords.latitude,
        }
        setOrigin(current);
    };

  return (
    <View style={styles.container}>
      <MapView
          style={styles.map}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
      >
        <Marker
            draggable={true}
          coordinate={origin}
            onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
            draggable={true}
          coordinate={destination}
            onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />
          <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_API_KEY}/>
        <Polyline
            coordinates={[origin,destination]}
            strokeColor="pink"
            strokeWidth={4}
        />
      </MapView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width:'100%',
    height:'100%',
  }
});
