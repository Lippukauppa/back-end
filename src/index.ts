import express from 'express';
import cors from 'cors';
import eventRouter from './routes/events.js';
import mongoose from 'mongoose'
import config from './utils/config.js'

mongoose.set('strictQuery', false);

console.log(`Connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Success! You are now connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error while connecting to MongoDB:', error.message)
  })

const app = express();


app.use(express.json());
app.use(cors())


app.use('/api/events', eventRouter);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});