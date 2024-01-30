import express from 'express';
import { Event } from "../models/event.js"
import { NewEventEntry } from '../types.js';

const router = express.Router();

router.get('/', (_req, res) => {
  Event.find({}).then(events => {
    res.json(events)
  })
});

router.get('/:id', (req, res) => {
  Event.findById(String(req.params.id))
    .then(event => {
      if(event) {
        res.send(event);
      } else {
        res.sendStatus(404);
      }
    })
});

router.post('/', (req, res) => {
  const { name, date, tickets, price } = req.body;
  
  const event = new Event(<NewEventEntry>{
    name: name,
    date: date,
    tickets: tickets,
    price: price
  })

  event.save()
    .then(savedEvent => {
      res.json(savedEvent)
    })
    .catch(error => {
      console.log(error.message)
    })
});

export default router;