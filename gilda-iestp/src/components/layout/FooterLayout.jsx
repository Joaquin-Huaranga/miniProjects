import React from 'react';
import {
  faFacebook,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const FooterLayout = () => {
  return (
    <div className="bg-blue-900 p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-white space-y-6">
          <h1 className="text-lg md:text-2xl font-bold">| Correos</h1>
          <div className="space-y-4 text-sm break-words">
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white w-4 h-4 mt-1"
              />
              <p>
                <b>Atención al estudiante:</b>{' '}
                <a
                  href="mailto:informes@iestpgildaballivian.edu.pe"
                  className="underline"
                >
                  informes@iestpgildaballivian.edu.pe
                </a>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white w-4 h-4 mt-1"
              />
              <p>
                <b>Mesa de Partes:</b>{' '}
                <a
                  href="mailto:mesadepartes@iestpgildaballivian.edu.pe"
                  className="underline"
                >
                  mesadepartes@iestpgildaballivian.edu.pe
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-white space-y-6">
          <h1 className="text-lg md:text-2xl font-bold">| Teléfonos</h1>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white w-4 h-4 mt-1"
              />
              <p>
                <b>Mesa de Partes:</b>{' '}
                <a href="tel:012762910" className="underline">
                  01-276-2910
                </a>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white w-4 h-4 mt-1"
              />
              <p>
                <b>Informes:</b>{' '}
                <a href="tel:014661034" className="underline">
                  01-466-1034
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-white space-y-6">
          <h1 className="text-lg md:text-2xl font-bold">| Redes Sociales</h1>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white cursor-pointer"
                size="2x"
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/IESTPGILDABALLIVIANOFICIAL'
                  )
                }
              />
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="text-white cursor-pointer"
                size="2x"
                onClick={() =>
                  window.open(
                    'https://www.messenger.com/t/IESTPGILDABALLIVIANOFICIAL'
                  )
                }
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white cursor-pointer"
                size="2x"
                onClick={() =>
                  window.open('mailto:informes@iestpgildaballivian.edu.pe')
                }
              />
            </div>
            <div className="flex items-start gap-2 text-sm">
              <FontAwesomeIcon icon={faBook} className="text-white w-4 mt-1" />
              <p>
                <a
                  href="https://www.drelm.gob.pe/reclamaciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Libro de reclamaciones
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-[1px] mt-10"></div>
    </div>
  );
};
