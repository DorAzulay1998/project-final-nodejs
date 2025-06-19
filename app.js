import express from 'express';
import usersRouter from './routes/users.js';
import dogsRouter from './routes/dogs.js';

const app = express();

app.use('/users', usersRouter);
app.use('/api/dogs', dogsRouter); // Add this line

export default app;