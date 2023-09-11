import express from 'express';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './backend/middleware/errorMiddleware.js'
import userRoutes from './backend/routes/userRoutes.js'
import productRoutes from './backend/routes/productRoutes.js'
import connectDB from './backend/config/db.js';
import colors from 'colors'

dotenv.config();

const port = process.env.PORT || 6000;

connectDB();

const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


app.get('/', (req, res) => res.send('Server is ready for start up'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));