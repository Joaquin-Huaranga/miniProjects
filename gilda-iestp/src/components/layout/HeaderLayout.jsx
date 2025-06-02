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

        <div className="py-4 shadow-sm">
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <img src="/logo_gilda.jpg" alt="Logo Gilda" className="w-[15em] md:w-[20em] " />

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <a
                  className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600 transition"
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                Correo Institución
              </a>
              <a
                  className="flex gap-2 items-center text-sm text-gray-800 hover:text-blue-600 transition"
                  href="https://virtual.iestpgildaballivian.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLaptop} className="w-4 h-4" />
                Aula Virtual
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 backdrop-blur-md sticky top-0 shadow-md z-50 py-4">
          <nav className="overflow-x-auto">
            <ul className="flex flex-wrap justify-center gap-4 px-4 max-w-screen-xl mx-auto">
              <NavDropdown
                  icon={faPeopleGroup}
                  label="Nosotros"
                  items={[
                    { label: 'Informacion', href: '/info' },
                    { label: 'Mision y Vision', href: '/mission-vision' },
                    { label: 'Historia', href: '/history' },
                    { label: 'Documentos de Gestion', href: '/management-documents' },
                    { label: 'Contactanos', href: '/contact' },
                    { label: 'Plana Docente', href: '/teacher-plan' },
                    { label: 'Eventos', href: '/events' },
                    { label: 'El Director', href: '/director' },
                  ]}
              />
              <NavDropdown
                  icon={faGraduationCap}
                  label="Programas de Estudios"
                  items={[
                    { label: 'Gestion Administrativa', href: '/administration' },
                    { label: 'Desarrollo de Sistemas de Informacion', href: '/computing' },
                    { label: 'Electronica Industrial', href: '/electronics' },
                    { label: 'Mecanica de Produccion Industrial', href: '/production-mechanics' },
                    { label: 'Contabilidad', href: '/accounting' },
                    { label: 'Construccion Civil', href: '/civil-construction' },
                    { label: 'Electricidad Industrial', href: '/industrial-electricity' },
                    { label: 'Mecatronica Automotriz', href: '/automotive-mechatronics' },
                  ]}
              />
              <NavDropdown
                  icon={faClipboardCheck}
                  label="Trámites"
                  items={[
                    { label: 'TUPA', href: '#' },
                    { label: 'Mesa de Partes', href: '#' },
                  ]}
              />
              <NavButton href="/news" icon={faComments} label="Comunicados Secretaria" />
              <NavButton href="/results" icon={faBook} label="RESULTADOS Admision 2025" variant="destructive" />
              <NavButton href="/investigation" icon={faBook} label="Investigación" />
              <NavButton href="https://centroderecursosies.drelm.gob.pe/" icon={faBook} label="Biblioteca Digital" variant="destructive" />
              <NavButton href="https://iestpgildaballivian.jedu.pe/" icon={faPeopleGroup} label="Intranet Jaguar Soft" variant="success" />
            </ul>
          </nav>
        </div>
      </div>
  );
};

const NavDropdown = ({ icon, label, items }) => (
    <li className="min-w-[200px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between rounded-lg shadow-sm">
            <FontAwesomeIcon icon={icon} className="w-4 h-4" />
            {label}
            <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 shadow-md rounded-md">
          {items.map((item, i) => (
              <a key={i} href={item.href}>
                <DropdownMenuItem>{item.label}</DropdownMenuItem>
              </a>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
);

const NavButton = ({ href, icon, label, variant = 'outline' }) => {
  const baseClass =
      variant === 'destructive'
          ? 'bg-red-500 text-white hover:bg-red-400'
          : variant === 'success'
              ? 'bg-green-500 text-white hover:bg-green-400'
              : 'bg-white text-gray-800 hover:bg-gray-100';

  return (
      <li className="min-w-[200px]">
        <Button
            onClick={() => window.open(href, '_blank')}
            className={`w-full justify-center rounded-lg shadow-sm transition ${baseClass}`}
        >
          <FontAwesomeIcon icon={icon} className="w-4 h-4 mr-2" />
          {label}
        </Button>
      </li>
  );
};
