export interface EventEntry {
    id: number,
    name: string,
    date: string,
    tickets: number,
    price: number,
}

export type NewEventEntry = Omit<EventEntry, 'id'>;