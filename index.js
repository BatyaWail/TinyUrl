console.log('hi')
import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import connectDB from './database.js';
import LinksRouter from './Routers/LinksRouter.js';
import UserRouter from './Routers/UserRouter.js';
// import jwt from "jsonwebtoken";//שימוש בJWT

// const secret = "JIs%WCfS#Sl454d5FX";
// const token = jwt.sign({ userId: 1, roles: ["teacher"] }, secret);
// console.log(token);
// connectDB();
connectDB();
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use('/links',LinksRouter)
app.use('/users', UserRouter);

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

