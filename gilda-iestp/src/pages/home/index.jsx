import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel.js';
import {Careers} from "./Careers.jsx";

export const Home = () => {
  return (
   <div>
     <Carousel
         opts={{ loop: true }}
         plugins={[
           Autoplay({
             delay: 4000,
           }),
         ]}
     >
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
     <Careers/>
   </div>
  );
};
