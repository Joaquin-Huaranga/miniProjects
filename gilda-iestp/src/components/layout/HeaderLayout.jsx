import React from 'react';
import { Alert } from '../ui/index.js';
import { EnvelopeIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

export const HeaderLayout = () => {
  return (
    <div>
      <Alert
        type="warning"
        message="Seguimos adelante, rumbo al LICENCIAMIENTO.- Encuesta MINEDU"
        link="https://docs.google.com/forms/d/e/1FAIpQLSfsAUv-YfmI1LMIqLYM9sHgwNE-9OT90jECuehPBPevB8Wzvg/viewform"
      />
      <div className="md:flex justify-around items-center">
        <img src="/logo_gilda.jpg" alt="" className="w-[30em]" />
        <div className="flex gap-5 justify-center">
          <a
            className="flex gap-2"
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeIcon className="h-5 w-5 text-black" />
            <p>Correo Insitucion</p>
          </a>
          <a
            className="flex gap-2"
            href="https://virtual.iestpgildaballivian.edu.pe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AcademicCapIcon className="h-5 w-5 text-black" />
            <p>Aula Virtual</p>
          </a>
        </div>
      </div>

      <div className="bg-gray-200 py-5">
        <nav>
          <ul className="flex justify-center gap-12">
            <a href="">
              <li>content</li>
            </a>
            <a href="">
              <li>content</li>
            </a>
            <a href="">
              <li>content</li>
            </a>
            <a href="">
              <li>content</li>
            </a>
            <a href="">
              <li>content</li>
            </a>
            <a href="">
              <li>content</li>
            </a>
            <a href="">
              <li>content</li>
            </a>
            <a href="">
              <li>content</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};
