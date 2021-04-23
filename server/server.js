import app from './app.js';
const PORT = process.env.PORT || 5000;
import ssr from './ssr.js';
import newrelic from 'newrelic';
const cache = require('express-redis-cache')();

app.get('/rooms/:id',
  (req, res, next) => {
    const id = req.params.id;
    if (id) {
      res.express_redis_cache_name = id;
    }
    next();
  },
  cache.route({ expire: 50000 }),
  ssr);

try {
  app.listen(PORT, () => {
    console.log(`Serving app at port ${PORT}`);
  });
} catch (e) {
  console.log(`server failed to connect: ${e}`);
}