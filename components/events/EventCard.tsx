// Make a card for each event, it should have a title, date, and description

'use client';

import React from 'react';
import Image from 'next/image';
import style from './EventCard.module.css';
import { EventCardData } from '@/lib/eventService';
import Link from 'next/link';

// Making event props which will have EventCardData type

const Event: React.FC<EventCardData> = ({ title, date, description, thumbnail, placeholder, id }) => {
  // Translating date, for example: 2022-01-01 -> Jan 1, 2022
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = (dateObj.getDate() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  date = `${month} ${day}, ${year}`;

  const rememberOrigin = () => {
    sessionStorage.setItem(
      `event-back-link:${id}`,
      `${window.location.pathname}${window.location.search}${window.location.hash}`
    );
  };

  const usUpcoming = new Date(dateObj) > new Date();
  const isNew = (Date.now() - dateObj.getTime()) / (1000 * 60 * 60 * 24) <= 7; // within the last 7 days
  const showFancy = usUpcoming || isNew;
  const fancyText = usUpcoming ? 'Upcoming!' : isNew ? 'New!' : '';

  // TODO: Generate colored placeholder for image if there is no thumbnail
  

  return (
    <div className={`${style.container} ${placeholder ? style.placeholder : ''}`}>
      {placeholder ? (
        <>
          <div className={style.placeholderImage}></div>
          <div className={style.placeholderTitle}></div>
          <div className={style.placeholderDate}></div>
          <div className={style.placeholderDescription}></div>
        </>
      ) : (
        <>
          {showFancy && (
            <div className={style.fancy}>
              <p>{fancyText}</p>
            </div>
          )}
          <Link href={`/events/${id}`} className={style.imageContainer} onClick={rememberOrigin}>
            <div className={style.date}>
              <p>{date}</p>
            </div>
            {thumbnail && <Image
              className={style.image} 
              src={thumbnail}
              alt={`Banner for ${title}`} 
              width={500} 
              height={300}
            />}
          </Link>
          <Link href={`/events/${id}`} onClick={rememberOrigin}>
            <h2 className={style.title}>
              {title}
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                <path d="M 19.980469 2.9902344 A 1.0001 1.0001 0 0 0 19.869141 3 L 15 3 A 1.0001 1.0001 0 1 0 15 5 L 17.585938 5 L 8.2929688 14.292969 A 1.0001 1.0001 0 1 0 9.7070312 15.707031 L 19 6.4140625 L 19 9 A 1.0001 1.0001 0 1 0 21 9 L 21 4.1269531 A 1.0001 1.0001 0 0 0 19.980469 2.9902344 z M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 13 A 1.0001 1.0001 0 1 0 19 13 L 19 19 L 5 19 L 5 5 L 11 5 A 1.0001 1.0001 0 1 0 11 3 L 5 3 z"></path>
              </svg>
            </h2>
          </Link>
          <p className={style.description}>{description}</p>
        </>
      )}
    </div>
  );
};

export default Event;