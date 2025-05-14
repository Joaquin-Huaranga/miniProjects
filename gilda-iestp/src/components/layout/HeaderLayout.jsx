import React from 'react';
import { Alert } from '../ui/index.js';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu.js';
import { Button } from '../ui/button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faBook,
  faClipboardCheck,
  faComments,
  faEnvelope,
  faGraduationCap,
  faLaptop,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';

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
        <div className="flex gap-5 justify-center py-2 ">
          <a
            className="flex gap-2"
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-black w-4 h-4 mt-1"
            />
            <p>Correo Insitucion</p>
          </a>
          <a
            className="flex gap-2"
            href="https://virtual.iestpgildaballivian.edu.pe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLaptop}
              className="text-black w-4 h-4 mt-1"
            />
            <p>Aula Virtual</p>
          </a>
        </div>
      </div>

      <div className="bg-gray-200 py-5">
        <nav>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:justify-center gap-3 xl:gap-12 px-4 max-w-screen-xl mx-auto">
            <li className="w-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <FontAwesomeIcon
                      icon={faPeopleGroup}
                      className="text-black w-4 h-4 mt-1"
                    />
                    Nosotros
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-black w-4 h-4 mt-1"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <a href="/info">
                    <DropdownMenuItem>Informacion</DropdownMenuItem>
                  </a>
                  <a href="/mission-vision">
                    <DropdownMenuItem>Mision y Vision</DropdownMenuItem>
                  </a>
                  <a href="/history">
                    <DropdownMenuItem>Historia</DropdownMenuItem>
                  </a>
                  <a href="/management-documents">
                    <DropdownMenuItem>Documentos de Gestion</DropdownMenuItem>
                  </a>
                  <a href="/contact">
                    <DropdownMenuItem>Contactanos</DropdownMenuItem>
                  </a>
                  <a href="/teacher-plan">
                    <DropdownMenuItem>Plana Docente</DropdownMenuItem>
                  </a>
                  <a href="/events">
                    <DropdownMenuItem>Eventos</DropdownMenuItem>
                  </a>
                  <a href="/director">
                    <DropdownMenuItem>El Director</DropdownMenuItem>
                  </a>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li className="w-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-black w-4 h-4 mt-1"
                    />
                    Programas de Estudios
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-black w-4 h-4 mt-1"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <a href="/administration">
                    <DropdownMenuItem>Gestion Administrativa</DropdownMenuItem>
                  </a>
                  <a href="/computing">
                    <DropdownMenuItem>
                      Desarrollo de Sistemas de Informacion
                    </DropdownMenuItem>
                  </a>
                  <a href="/electronics">
                    <DropdownMenuItem>Electronica Industrial</DropdownMenuItem>
                  </a>
                  <a href="/production-mechanics">
                    <DropdownMenuItem>
                      Mecanica de Produccion Industrial
                    </DropdownMenuItem>
                  </a>
                  <a href="/accounting">
                    <DropdownMenuItem>Contabilidad</DropdownMenuItem>
                  </a>
                  <a href="/civil-construction">
                    <DropdownMenuItem>Construccion Civil</DropdownMenuItem>
                  </a>
                  <a href="/industrial-electricity">
                    <DropdownMenuItem>Electricidad Industrial</DropdownMenuItem>
                  </a>
                  <a href="/automotive-mechatronics">
                    <DropdownMenuItem>Mecatronica Automotriz</DropdownMenuItem>
                  </a>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li className="w-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <FontAwesomeIcon
                      icon={faClipboardCheck}
                      className="text-black w-4 h-4 mt-1"
                    />
                    Tramites
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-black w-4 h-4 mt-1"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <a href="#">
                    <DropdownMenuItem>TUPA</DropdownMenuItem>
                  </a>
                  <a href="#">
                    <DropdownMenuItem>Mesa de Partes</DropdownMenuItem>
                  </a>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li className="w-full">
              <Button
                variant="outline"
                onClick={() => window.open('/news')}
                className="w-full justify-start"
              >
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-black w-4 h-4 mt-1"
                />
                Comunicados Secretaria Academica
              </Button>
            </li>

            <li className="w-full">
              <Button
                variant="destructive"
                onClick={() => window.open('/results')}
                className="w-full hover:bg-red-400"
              >
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-white w-4 h-4 mt-1"
                />
                RESULTADOS Admision 2025
              </Button>
            </li>

            <li className="w-full">
              <Button
                variant="outline"
                onClick={() => window.open('/investigation')}
                className="w-full"
              >
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-black w-4 h-4 mt-1"
                />
                Investigacion
              </Button>
            </li>

            <li className="w-full">
              <Button
                variant="destructive"
                onClick={() =>
                  window.open('https://centroderecursosies.drelm.gob.pe/')
                }
                className="w-full hover:bg-red-400"
              >
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-white w-4 h-4 mt-1"
                />
                Biblioteca Digital
              </Button>
            </li>

            <li className="w-full">
              <Button
                onClick={() =>
                  window.open('https://iestpgildaballivian.jedu.pe/')
                }
                className="w-full bg-green-500 text-white shadow-xs hover:bg-green-400"
              >
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  className="text-white w-4 h-4 mt-1"
                />
                Intranet Jaguar Soft
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
