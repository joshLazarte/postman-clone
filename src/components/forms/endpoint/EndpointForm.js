import React from 'react';

const EndpointForm = () => {
  return (
    <div className='endpoint-form'>
      <form>
        <select className='endpoint-form__select'>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <input type='text' className='endpoint-form__input' />
        <button className='endpoint-form__submit'>Send</button>
      </form>
    </div>
  );
};

export default EndpointForm;
