import express from 'express';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';
import colors from 'colors'

dotenv.config();

const port = process.env.PORT || 6000;

connectDB();

const app = express();

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('Server is ready for start up'));

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => console.log(`server started on port ${port}`));