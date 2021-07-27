import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';


const app = express()

app.use(bodyParser.json());

app.use('/user', userRoutes);




await mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
} );

app.listen(process.env.PORT, () => {

    console.log(`Server is running ${process.env.PORT}`);


});
