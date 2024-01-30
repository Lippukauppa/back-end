import mongoose from "mongoose";
import { NewEventEntry } from '../types.js';

const eventSchema = new mongoose.Schema<NewEventEntry>({
    name: { type: String, minlength: 3, required: true },
    date: { type: String, minlength: 3, required: true },
    tickets: { type: Number, minlength: 3, required: true },
    price: { type: Number, minlength: 1, required: true },
})

eventSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
const Event = mongoose.model('Event', eventSchema)

export {
    Event
}