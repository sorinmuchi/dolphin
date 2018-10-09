/**
 * app.js
 */
import dotenv from 'dotenv';
import path from 'path';
import express from 'express';

import routes from './routes';

// use dotenv
dotenv.config({
  silent: true,
});

// Express app setup
const app = express();

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './public')));

// use routes
app.use('/', routes);

export default app;
