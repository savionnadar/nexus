import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
          <Link to='/'>
            <p className="text-2xl font-bold py-1 px-2 rounded bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
              infinite
            </p>
          </Link>
          <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl rounded-full py-1 px-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:shadow-lg'>
            { darkTheme ? '🌕' : '🌑' }
          </button>
        </div>
        <Search />
    </div>
  );
};
