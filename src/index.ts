import express from 'express';
import eventRouter from './routes/events.js';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/events', eventRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});