import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel.js';

export const Home = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img
            src="https://www.iestpgildaballivian.edu.pe/Public/img/formacion1.jpg"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://www.iestpgildaballivian.edu.pe/Public/img/titulad.jpg"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://www.iestpgildaballivian.edu.pe/Public/img/gilda_noche.jpg"
            alt=""
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://www.iestpgildaballivian.edu.pe/Public/img/web66.jpg"
            alt=""
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
