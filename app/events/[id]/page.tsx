import React from 'react';
import Image from 'next/image';
import { getEventById, getEvents, EventData } from '../../../lib/eventService';
// import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './page.module.css'
import Link from 'next/link';

// Custom markdown components
import CustomLink from '../../../components/markdown/link';
import CustomImage from '../../../components/markdown/image';

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
  
  return <div className={styles.page}>
    {/* Banner */}
    <div className={styles.row}>
      <div className={`${styles.banner} ${styles.columnCenter}`}>
        {event.thumbnail && <Image src={event.thumbnail} alt={`Banner for ${event.title}`} width={500} height={300} />}
      </div>
    </div>


    <div className={styles.row}>
      {/* Back-button */}
      <div className="options">
        <Link className={styles.backLink} href="../events">
          <img className={styles.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3YsQ3CMBSE4V+vZwDmSNgBZqBgJqhTwGphBShRaByJgggpBX6X3Cddf8+2LNlgZmZmy7EDWgQF0AFDyQWx8reP8mO2CJd/ABtEy7+AIwLlrxPlTyQXLl9JeOUrCa98Rd2Xq/LfuQOHOeXbBOWHkn7OAI36AFmOUA/sWeMNNPIQWYSPUxLhnUgilJ+Uv4Z4KjzqF/GtMvWxdUZUU2JmZmar8AYiRAS6GnW2RwAAAABJRU5ErkJggg==" alt="left"></img>
          Back
        </Link>
      </div>
      {/* Title/description */}
      <article className={styles.columnCenter}>
        <h1>{event.title}</h1>
        <p>{event.description}</p>

        <div className={styles.tags}>
          {/* TODO: Add tags */}
        </div>
      </article>
    </div>


    <div className={styles.row}>
      {/* TODO: Share options */}
      {/* Date/Time/Location */}
      {/* Content */}
      <Markdown
        className={`${styles.columnCenter} ${styles.markdown}`}
        remarkPlugins={[remarkGfm]}
        components={{ a: CustomLink, img: CustomImage }}
      >
        {event.body}
      </Markdown>
    </div>
  </div>
  // return <EventPage event={event} />;
};

export default Page;