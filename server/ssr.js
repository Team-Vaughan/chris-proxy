import path from 'path';
import fs from 'fs';
// import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import App from '../client/src/components/App.js';

const ssr = (req, res) => {

  const app = ReactDOMServer.renderToString(React.createElement(App));

  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });

};

export default ssr;