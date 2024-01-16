import express from 'express';
import eventService from '../services/eventService.js';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(eventService.getEntries());
});

router.get('/:id', (req, res) => {
  const event = eventService.findById(Number(req.params.id));

  if(event) {
    res.send(event);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (req, res) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const { name, date, tickets, price } = req.body;
  const addedEvent = eventService.addEvent({
    name,
    date,
    tickets,
    price
  });
  res.json(addedEvent);
});

export default router;