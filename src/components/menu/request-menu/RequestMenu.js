import React from 'react';

const RequestMenu = () => {
  return (
    <ul className='RequestMenu'>
      <li className='RequestMenu__item'>
        <a href='!#'>Params</a>{' '}
      </li>
      <li className='RequestMenu__item'>
        <a href='!#'>Authorization</a>{' '}
      </li>
      <li className='RequestMenu__item'>
        <a href='!#'>Headers</a>{' '}
      </li>
      <li className='RequestMenu__item'>
        <a href='!#'>Body</a>{' '}
      </li>
    </ul>
  );
};

export default RequestMenu;
