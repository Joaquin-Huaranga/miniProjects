import React from 'react';
import { careersCardList } from "../../data-list/";

export const Careers = () => {
    return (
        <div>
            <div>
                <h1>Nuestras Carreras</h1>
            </div>
            {careersCardList.map((careerObj, index) => (
                <div key={index}>
                    <h3>{careerObj.career}</h3>
                    <img src={careerObj.image} alt={careerObj.career} />
                </div>
            ))}
        </div>
    );
};
