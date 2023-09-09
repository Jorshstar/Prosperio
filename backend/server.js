import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.port || 6000;

const app = express();

app.get('/', (req, res) => res.send('Server is readyt for start up'));

app.listen(port, () => console.log(`server started on port ${port}`));