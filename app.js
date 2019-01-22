const express  = require('express');
const app = express();
const config = require('config');
const home = require('./routes/home');
const courses = require('./routes/courses');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);
app.use('/', home);
app.use('/api/courses', courses);

console.log(config.get('name'));

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
