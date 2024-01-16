import events from '../../data/entries.js';

import { NewEventEntry, EventEntry } from '../types.js';

const getEntries = (): EventEntry[] => {
  return events;
};

const findById = (id: number) : EventEntry | undefined => {
  const entry = events.find(d => d.id === id);
  return entry;
};

const addEvent = (entry: NewEventEntry ): EventEntry => {
  const newEventEntry = {
    id: Math.max(...events.map(d => d.id)) +1,
    ...entry
  };
  events.push(newEventEntry);
  return newEventEntry;
};

export default {
  getEntries,
  findById,
  addEvent
};