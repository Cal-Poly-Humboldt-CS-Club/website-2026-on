import React from 'react';
import { getEventById, getEvents, EventData } from '../../../lib/eventService';

interface EventPageProps {
  event: EventData;
}

const EventPage: React.FC<EventPageProps> = ({ event }) => {
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      {event.thumbnail && <img src={event.thumbnail} alt={`Banner for ${event.title}`} />}
      <p>{event.description}</p>
      <div dangerouslySetInnerHTML={{ __html: event.body || '' }} />
    </div>
  );
};

export async function generateStaticParams() {
  const { events } = getEvents();
  return events.map((event) => ({
    id: event.title.replace(/\s+/g, '-').toLowerCase(),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params;
    
    console.log("Event name %%%:", id);
    const event = getEventById(id);

    if (!event) {
        return <div>Event not found</div>;
    }

    return <EventPage event={event} />;
}