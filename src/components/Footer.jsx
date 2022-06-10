import React from 'react';

export const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  //TODO: Add date in string format

  return (
    <div className='text-center p-10 mt-10 border-t border-gray-200 dark:border-gray-700'>
        <h1>{ date } Infinite Search, Inc.</h1>
    </div>
  );
};
