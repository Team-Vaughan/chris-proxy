import app from './app.js';
const PORT = process.env.PORT || 5000;
import ssr from './ssr.js';
import newrelic from 'newrelic';

app.get('/rooms/:id', ssr);

try {
  app.listen(PORT, () => {
    console.log(`Serving app at port ${PORT}`);
  });
} catch (e) {
  console.log(`server failed to connect: ${e}`);
}