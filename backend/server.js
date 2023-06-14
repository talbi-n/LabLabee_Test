import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import LabRouter from './routes/LabLabeeRoutes.js';
//configuration of env
dotenv.config();
//connect to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('-----------connected to mongodb-----------'))
  .catch((err) => console.log(err));

// creating the express app
const app = express();

//here middlwares
app.use(express.json()); //this line convert  data in post request to json object
app.use(express.urlencoded({ extended: true })); // urlencoded method inbuilt in express to recognize the incoming Request Object as strings or arrays

//middleware to use routes of LabRouter
app.use('/api/Labs', LabRouter);

//error handler
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(5000, () => {
  console.log(
    '***********************server in lisning***********************'
  );
});
