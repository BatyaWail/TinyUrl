console.log('hi')
import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import connectDB from './database.js';
import LinkRouter from './Routers/LinkRouter.js';
import UserRouter from './Routers/UserRouter.js';
connectDB();
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use('/links',LinkRouter)
app.use('/users', UserRouter);
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

