import React from 'react';
import Image from 'next/image';
import { getEventById, getEvents, EventData } from '../../../lib/eventService';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
// import './stackoverflow-light.min.css'; // Import Highlight.js CSS
// import './stackoverflow-dark.min.css'; // Import Highlight.js CSS
import './vs2015.min.css';
// import './vs.min.css';
import styles from './page.module.css';
import Link from 'next/link';
import Tag from '../../../components/events/Tag';

// Custom markdown components
import CustomLink from '../../../components/markdown/link';
import CustomImage from '../../../components/markdown/image';

interface EventPageProps {
  event: EventData;
}

// const EventPage: React.FC<EventPageProps> = ({ event }) => {
//   return (
//     <div>
//       <h1>{event.title}</h1>
//       {event.thumbnail && <Image key={`
//           ${event.id}-page`} 
//           // src={event.thumbnail} 
//           src={`${event.thumbnail}?context=page`}
//           alt={`Banner for ${event.title}`} 
//           width={1000} 
//           height={600} 
//           sizes="(max-width: 768px) 100vw, 1000px"
//         />}
//       <p>{event.description}</p>
//       <div dangerouslySetInnerHTML={{ __html: event.body || '' }} />
//     </div>
//   );
// };

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

  // Translating date, for example: 2022-01-01 -> Jan 1, 2022
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = (dateObj.getDate() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  const formatedDate = `${month} ${day}, ${year}`;
  
  return <div className={styles.page}>
    {/* Banner */}
    <div className={styles.row}>
      <div className={`${styles.banner} ${styles.columnCenter}`}>
        {event.thumbnail && <Image src={event.thumbnail} alt={`Banner for ${event.title}`} width={1000} height={600} />}
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
          {event.tags && event.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </article>
    </div>


    <div className={styles.row}>
      {/* Share options */}
      <div className="sharing">
        {/* <div className="share-title">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVR4nO2Yu0oDQRSGPwtttNJKTBWx18pHSLTQKNEoCLaKT2FjL/gCWmkbBfMCinjBViwMJF5Qg6ARxAusLIywDJPdnbCbncH94UBg5mT+b3Z25sxCqlSpktIc0ADugAKWqQt4BhwR30AJy/ToAbASYlaYthqiqID4AZawSMUUwhAVbXgSvUAe2ADKwBXwAnxJxuUXu5D0np8DdoEPH6OOT9STMj8DXLZp2vFErdPGs0AlAuNOO0toGngSJ+VUG+bngVcfQ9fAFrAAjAH9QLc4wCI52O48f3CrmbvuM4s7wHiLvFKUp7I8eFhttjB/AAz75JWiLinaAVDN/DuwHJBXiqMe0gWYV+Q8AKMh3rXvOIo5HYCs4oV1zY+EGMfd22OpRHUAKoplEzTzf7qPw7wOwIyib9Cal5dQDbgRv+k0wIXU7xBD5IQAyCnWr99WaRzAntRnG4PkBAD0KarKVieskQB5RW2DTQAbUrtbmFkFUJbaF7EM4EpqD3twGQPQkNoHsAzgU2rvwTKAqqfNLQPi1qS4WLkxEQXAhKgk62JLjVtV3QnTvQ/ELUfXj/UAb1LCEMkpI3lxvQXqREraTwgiIz4IeL0ch0lcUzw2U2IlDECP4rJiQpyKD2ChNAicG2DaEXEmPGnJpV0FjoBmAqabYuwVnZlPleq/6RcoJ/YXV/h0igAAAABJRU5ErkJggg==" alt="share"></img>
          Share
        </div>
        <div className="links">
          <Link href="https://www.facebook.com/">
            <img src="https://img.icons8.com/material-rounded/48/000000/facebook.png" alt="facebook"/>
          </Link>
          <Link href="https://www.twitter.com/">
            <img src="https://img.icons8.com/material-rounded/48/000000/twitter.png" alt="twitter"/>
          </Link>
        </div> */}
      </div>
      {/* Content */}
      <div className={styles.columnCenter}>
        {/* Date/Time/Location */}
        <div className={styles.details}>
          <div className={styles.block}>
            <img width="96" height="96" src={`https://img.icons8.com/material-rounded/96/FFFFFF/calendar-${day}.png`} alt="calendar-icon"/>
            <p>{formatedDate}</p>
          </div>
          <div className={styles.block}>
            <img width="96" height="96" src="https://img.icons8.com/material-rounded/96/FFFFFF/clock.png" alt="clock"/>
            <p>{event.time.toUpperCase()}</p>
          </div>
          <div className={styles.block}>
            <img width="96" height="96" src="https://img.icons8.com/material-rounded/96/FFFFFF/marker.png" alt="marker"/>
            <p>{event.location.toUpperCase()}</p>
          </div>
        </div>
        <Markdown
          className={`${styles.markdown}`}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{ a: CustomLink, img: CustomImage }}
        >
          {event.body}
        </Markdown>
      </div>
    </div>

    <div className="row">
      <div className="columnCenter">
        <h2>Attribution</h2>
        <p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        <ul>
          <li>
            <a target="_blank" href="https://icons8.com/icon/83147/clock">Clock icon</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/85102/calendar">Calendar icon</a>
          </li>
          <li>
            <a target="_blank" href="https://icons8.com/icon/85149/location">Marker icon</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  // return <EventPage event={event} />;
};

export default Page;