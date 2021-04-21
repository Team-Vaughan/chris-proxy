const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const axios = require('axios');
const fallback = require('./fallbacks.js');
const routes = require('./routes');

app.use('/', express.static('public'));
app.use('/rooms/:id', express.static('public'));

//***********/ RETRIEVE BUNDLES /***********//

app.get('/header', async (req, res) => {
  try {
    const response = await axios.get('https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/header.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/photos', async (req, res) => {
  try {
    const response = await axios.get('https://sdc-photo-service-bundle.s3.us-east-2.amazonaws.com/photos-service.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/summary', async (req, res) => {
  try {
    const response = await axios.get('https://sdc-summary-service.s3.us-east-2.amazonaws.com/summary/summary.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://fec-gnocchi-user-profile.s3-us-west-2.amazonaws.com/users.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

//***********/ SERVICE FORWARDING /***********//

app.get('/rooms/:id/summary', async (req, res) => {
  const uri = routes.summary;
  try {
    const response = await axios.get(`${uri}rooms/${req.params.id}/summary`);
    res.send(response.data);
  } catch (err) {
    res.send(fallback.summary);
  }
});

app.get('/rooms/:id/getPhotosByRoomId', async (req, res) => {
  const uri = routes.photos || 'http://localhost:5005/';
  try {
    const response = await axios.get(`${uri}rooms/${req.params.id}/getPhotosByRoomId`);
    response.data.forEach(photo => {
      if (photo.is_primary === null) {
        photo.is_primary = true;
      }
    });
    res.send(response.data);
  } catch (err) {
    res.send(fallback.photos);
  }
});

app.get('/users/:id', async (req, res) => {
  const uri = routes.users;
  try {
    const response = await axios.get(`http://ec2-52-24-37-226.us-west-2.compute.amazonaws.com:5007/users/${req.params.id}`);
    res.send(response.data);
  } catch (err) {
    res.send(fallback.user);
  }
});

module.exports = app;