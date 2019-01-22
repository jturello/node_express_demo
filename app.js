const express  = require('express');
const app = express();
const config = require('config');
const home = require('./routes/home');
const courses = require('./routes/courses');
const morgan = require('morgan');
const logger = require('./middleware/logger');

console.log(config.get('name'));

app.use(express.json());
app.use(logger);
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}
app.use('/', home);
app.use('/api/courses', courses);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
