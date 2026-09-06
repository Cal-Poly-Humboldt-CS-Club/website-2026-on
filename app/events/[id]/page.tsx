import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getEventById, getEvents } from '../../../lib/eventService';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
// import './stackoverflow-light.min.css'; // Import Highlight.js CSS
// import './stackoverflow-dark.min.css'; // Import Highlight.js CSS
import './vs2015.min.css';
// import './vs.min.css';
import styles from './page.module.css';
import Tag from '@/components/events/Tag';
import EventBackLink from '@/components/events/EventBackLink';

// Custom markdown components
import CustomLink from '@/components/markdown/link';
import CustomImage from '@/components/markdown/image';



export async function generateStaticParams() {
  const { events } = getEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    return {};
  }

  const socialThumbnail = event.thumbnail?.replace(/\.[^.]+$/, '-social.jpg');

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      type: 'website',
      title: event.title,
      description: event.description,
      url: `/events/${event.id}`,
      images: socialThumbnail ? [{ url: socialThumbnail, alt: `Banner for ${event.title}` }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: socialThumbnail ? [socialThumbnail] : [],
    },
  };
}


function noEventFound() {
  return <div className={styles.noEventFound}>
    <span className={styles.eyes}></span>
    <h1>404 - Event not found</h1>
    <p className={styles.noEventFoundText}>Either the event doesn't exist <i>(double check your URL)</i>, or it has been removed...</p>

    {/* Explore more */}
    <p>Explore more events on our <a href="/events">events page</a>.</p>
  </div>;
}



const Page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const event = await getEventById(id);
  if (!event) {
    return noEventFound();
  }

  // Translating date, for example: 2022-01-01 -> Jan 1, 2022
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = (dateObj.getDate() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  const formatedDate = `${month} ${day}, ${year}`;
  
  return <>
    {/* Banner */}
    <div className={styles.row}>
      <div className={`${styles.banner} ${styles.columnCenter}`}>
        {event.thumbnail && <Image src={event.thumbnail} alt={`Banner for ${event.title}`} width={1000} height={600} />}
      </div>
    </div>


    <div className={styles.row}>
      {/* Back-button */}
      <div className="options">
        <EventBackLink eventId={id} className={styles.backLink} iconClassName={styles.icon} />
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
            <Image
              width="100"
              height="100"
              src={`https://img.icons8.com/ios-filled/100/FFFFFF/calendar-${day}.png`} alt="calendar-icon"/>
            <p>{formatedDate}</p>
          </div>
          <div className={styles.block}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M37.735,12.679L27.644,23.61 C27.864,24.027,28,24.496,28,25c0,0.76-0.292,1.447-0.758,1.976l3.632,6.539c0.269,0.482,0.094,1.091-0.388,1.359 C30.332,34.96,30.165,35,30.001,35c-0.352,0-0.692-0.186-0.875-0.515l-3.631-6.535C25.333,27.977,25.17,28,25,28 c-1.657,0-3-1.343-3-3s1.343-3,3-3c0.42,0,0.82,0.088,1.183,0.244l10.082-10.923c0.375-0.404,1.007-0.431,1.413-0.056 C38.084,11.64,38.109,12.272,37.735,12.679z"></path>
            </svg>
            <p>{event.time.toUpperCase()}</p>
          </div>
          <div className={styles.block}>
            <svg
              fill="#000000"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12,1C7.58,1,4,4.58,4,9c0,7.08,8,14,8,14s8-6.92,8-14C20,4.58,16.42,1,12,1z M12,12c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,12,12,12z" />
            </svg>
            <p>{event.location.toUpperCase()}</p>
          </div>
        </div>

        <Markdown
          className={`${styles.markdown}`}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{ a: CustomLink, img: CustomImage as any }}
        >
          {event.body}
        </Markdown>
        
      </div>
    </div>
  </>
};

export default Page;