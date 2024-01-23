import express from 'express';
import cors from 'cors';
import eventRouter from './routes/events.js';
const app = express();


app.use(express.json());
app.use(cors())

const PORT = 3001;

app.use('/api/events', eventRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});