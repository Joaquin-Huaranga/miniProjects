import React from 'react';
import { careersCardList } from "../../data-list/";

export const Careers = () => {
    return (
        <div>
            <div className="text-center bg-blue-900 text-white px-4 py-10 text-2xl">
                <h1>Programas de Estudio</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {careersCardList.map((careerObj, index) => (
                    <div key={index} className="p-4 border border-gray-200 justify-items-center">
                        <img src={careerObj.image} alt={careerObj.career} className="w-[10em] h-[6em]" />
                        <h3>{careerObj.career}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
