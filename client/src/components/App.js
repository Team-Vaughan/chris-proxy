import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';

const App = () => {

  const renderService = async (path) => {
    const response = await axios.get(path);
    const invokeBundle = Function(response.data);
    invokeBundle();
  };

  useEffect(() => {
    renderService('/header');
    renderService('/photos');
    renderService('/summary');
    renderService('/users');
  });

  return (
    <div>
      <div id='header'></div>
      <div id='title-bar'></div>
      <div id='main'></div>
      <div id='summaryBar'></div>
      <div id='users'></div>
    </div>
  );
};

export default App;