import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  thumbnail?: string | undefined;
  tags?: string[];
  body: string;
}
export interface EventCardData {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail?: string;
  placeholder?: boolean;
}

const eventsDirectory = path.join(process.cwd(), 'events');
let cachedEvents: EventData[] | null = null;

const generateEventId = (title: string): string => {
  return title.replace(/\s+/g, '-').toLowerCase();
};

export const transformToEventCardData = (event: EventData): EventCardData => {
  const { id, title, date, description, thumbnail } = event;
  return { id, title, date, description, thumbnail };
};

const readEventFiles = (): EventData[] => {
  // Only using cache in production mode
  if(process.env.NODE_ENV !== 'production') {
    console.log("Not production mode: Skipping events cache");
  }
  if (process.env.NODE_ENV !== 'production' || !cachedEvents) {
    // Filling in the cachedEvents
    const filenames = fs.readdirSync(eventsDirectory);
    const events = filenames.map((filename) => {
      const filePath = path.join(eventsDirectory, filename);

      // Only read markdown files
      if (!fs.lstatSync(filePath).isFile() || !filename.endsWith('.md')) {
        return null;
      }

      // Extract metadata from the file
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Create the event object
      const id = data.id || generateEventId(data.title || filename);
      const title = data.title || '';
      const date = data.date || '';
      const time = data.time || '';
      const location = data.location || '';
      const description = data.description || '';
      const thumbnail = data.thumbnail || undefined;
      const tags = data.tags || [];

      return { id, title, date, time, location, description, thumbnail, tags, body: content } as EventData;
    }).filter(event => event !== null) as EventData[];

    cachedEvents = events;
  }

  // Return the cached events
  return cachedEvents;
};

const filterEventsByQuery = (events: EventData[], query: string): EventData[] => {
  return events.filter((event) => {
    return (
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase()) ||
      (event.body && event.body.toLowerCase().includes(query.toLowerCase())) ||
      (event.tags && event.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    );
  });
};

const sortEventsByRelevance = (events: EventData[], query: string): EventData[] => {
  const testing = query.toLowerCase();
  if(testing === 'test'){
    return events;
  }
  // Implement sorting logic based on relevance
  return events;
};


// ===== Exported functions =====
// == Card Data ==

export const getEvents = (query: string = '', page: number = 1, limit: number = 10): { events: EventCardData[], totalEvents: number } => {
  const events = readEventFiles();

  // Debugging all events
  const eventsForDebug = events.map((event) => ({ id: event.id, title: event.title }));
  console.log('All events:', eventsForDebug);

  // Filtering events by query
  const filteredEvents = filterEventsByQuery(events, query);

  // Changing event format to EventCardData
  const eventCards = filteredEvents.map(transformToEventCardData);

  const totalEvents = eventCards.length;
  const pagedEvents = eventCards.slice((page - 1) * limit, page * limit);
  return { events: pagedEvents, totalEvents };
};

export const searchEvents = (query: string): EventCardData[] => {
  const events = readEventFiles();

  // Filtering events by query and sorting by relevance
  const filteredEvents = filterEventsByQuery(events, query);

  // Implement sorting logic based on relevance
  const stortedEvents =  sortEventsByRelevance(filteredEvents, query);

  // Change event format to EventCardData
  return stortedEvents.map(transformToEventCardData);
};

// == Full Event Data ==

export const getEventById = (id: string): EventData | null => {
  const events = readEventFiles();
  return events.find((event) => event.id === id.toLowerCase()) || null;
};