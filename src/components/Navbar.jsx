import React from 'react';
import { links } from '../data';
const Navbar = () => {
  return (
    <nav className='bg-cyan-900'>
      <div className='mx-auto max-w-xl px-8 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          Fahad <span className='text-slate-100'>Ijaz</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg hover:text-slate-100 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
