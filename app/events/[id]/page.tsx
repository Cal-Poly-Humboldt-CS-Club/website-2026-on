import React from 'react';
import Image from 'next/image';
import { getEventById, getEvents, EventData } from '../../../lib/eventService';

interface EventPageProps {
  event: EventData;
}

const EventPage: React.FC<EventPageProps> = ({ event }) => {
  return (
    <div>
      <h1>{event.title}</h1>
      {event.thumbnail && <Image src={event.thumbnail} alt={`Banner for ${event.title}`} width={500} height={300} />}
      <p>{event.description}</p>
      <div dangerouslySetInnerHTML={{ __html: event.body || '' }} />
    </div>
  );
};

export async function generateStaticParams() {
  const { events } = getEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

type Params = Promise<{ id: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { id } = await params;

  console.log("Event name %%%:", id);
  const event = await getEventById(id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return <EventPage event={event} />;
};

export default Page;