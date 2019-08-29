import React, { Fragment } from 'react';
import Navbar from './components/layout/navbar/Navbar';
import EndpointForm from './components/forms/endpoint/EndpointForm';
import RequestSection from './components/layout/request-section/RequestSection';

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <EndpointForm />
        <RequestSection />
      </div>
    </Fragment>
  );
}

export default App;
