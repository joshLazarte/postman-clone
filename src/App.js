import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import EndpointForm from './components/forms/EndpointForm';

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <EndpointForm />
      </div>
    </Fragment>
  );
}

export default App;
