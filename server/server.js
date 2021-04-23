import app from './app.js';
const PORT = process.env.PORT || 5000;
import ssr from './ssr.js';
// import newrelic from 'newrelic';
// import '@babel/register';

app.get('/rooms/:id', ssr);

app.listen(PORT, () => {
  console.log(`Serving app at http://localhost:${PORT}`);
});