const express = require('express');
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/errorController');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(
  express.json({
    limit: '10kb'
  })
);


// ROUTES
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;