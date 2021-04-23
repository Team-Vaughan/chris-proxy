import app from './app.js';
const PORT = process.env.PORT || 5000;
// import newrelic from 'newrelic';

app.listen(PORT, () => {
  console.log(`Serving app at http://localhost:${PORT}`);
});