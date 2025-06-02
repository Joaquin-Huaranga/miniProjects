import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '../../components/ui/carousel.js';
import { Careers } from './Careers.jsx';

export const Home = () => {
    const carouselItems = [
        {
            src: 'https://www.iestpgildaballivian.edu.pe/Public/img/formacion1.jpg',
            alt: 'Formación profesional',
        },
        {
            src: 'https://www.iestpgildaballivian.edu.pe/Public/img/titulad.jpg',
            alt: 'Estudiantes titulados',
        },
        {
            src: 'https://www.iestpgildaballivian.edu.pe/Public/img/gilda_noche.jpg',
            alt: 'Vista nocturna del instituto',
        },
        {
            src: 'https://www.iestpgildaballivian.edu.pe/Public/img/web66.jpg',
            alt: 'Presentación institucional',
        },

    ]


    return (
        <div className="max-w-8xl">
            <Carousel
                opts={{ loop: true }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false,
                    }),
                ]}
            >
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-[500px] object-contain"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="mt-12">
                <Careers />
            </div>
        </div>
    );
};
