import React, { Fragment } from 'react';
import Navbar from './components/layout/navbar/Navbar';
import EndpointForm from './components/forms/endpoint/EndpointForm';

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <EndpointForm />
      </div>
    </Fragment>
  );
}

export default App;
