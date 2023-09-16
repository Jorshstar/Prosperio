import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
const port = process.env.PORT || 6000;
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import colors from 'colors'

connectDB();

const app = express();

//middleware to pass incoming request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Server is ready for start up'));

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => console.log(`server started on port ${port}`));