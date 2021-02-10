const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const axios = require('axios');

app.use('/', express.static('public'));
app.use('/rooms/:id', express.static('public'));

app.get('/availability', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5001/rooms/1/availability.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/rooms/:id/availableDates', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5001/rooms/${req.params.id}/availableDates`);
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/rooms/:id/minNightlyRate', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5001/rooms/${req.params.id}/minNightlyRate`);
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/photos', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5005/rooms/1/photos-service.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/places', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5008/places.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/places/:id', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5008/places/${req.params.id}`);
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/rooms/:id/getPhotosByRoomID', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5005/rooms/${req.params.id}/getPhotosByRoomID`);
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5007/users.js');
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});


app.get('/users/:id', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:5007/users/${req.params.id}`);
    res.send(response.data);
  } catch (err) {
    console.error(err);
  }
});


module.exports = app;