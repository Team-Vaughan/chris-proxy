import path from 'path';
import fs from 'fs';
// import express from 'express';
// const app = express();
// import axios from 'axios';
// import fallback from './fallbacks.js';
// import routes from './routes.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import App from '../client/src/components/App.js';


app.use('/', express.static('public'));
// app.use('/rooms/:id', express.static('public'));

const ssr = (req, res) => {

  const app = ReactDOMServer.renderToString(<App />);

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