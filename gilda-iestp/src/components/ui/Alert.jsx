import React from 'react';
import {
  ExclamationCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/solid';

export const Alert = ({ type = 'info', title, message, link, linkText }) => {
  const alertConfig = {
    warning: {
      bg: 'bg-red-100',
      border: 'border-red-400',
      text: 'text-red-800',
      icon: <ExclamationCircleIcon className="h-6 w-6 text-red-500" />,
    },
    info: {
      bg: 'bg-blue-100',
      border: 'border-blue-400',
      text: 'text-blue-800',
      icon: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
    },
    success: {
      bg: 'bg-green-100',
      border: 'border-green-400',
      text: 'text-green-800',
      icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
    },
    event: {
      bg: 'bg-violet-100',
      border: 'border-violet-400',
      text: 'text-violet-800',
      icon: <CalendarDaysIcon className="h-6 w-6 text-violet-500" />,
    },
  };

  const config = alertConfig[type] || alertConfig.info;

  return (
    <div
      className={`${config.bg} justify-items-center border-l-4 ${config.border} ${config.text} p-4 mb-4 relative`}
      role="alert"
    >
      <div className="flex items-center">
        {config.icon}
        <div>
          {title && <h3 className="font-bold">{title}</h3>}
          <p className="text-sm">
            {message}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline hover:opacity-80"
              >
                {linkText || 'Haz click aquí'}
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
