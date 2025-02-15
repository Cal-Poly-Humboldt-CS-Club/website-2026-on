// Make a card for each event, it should have a title, date, and description

import React from 'react';
import Image from 'next/image';
import style from './Event.module.css';
import { EventCardData } from '@/lib/eventService';

// Making event props which will have EventCardData type

const Event: React.FC<EventCardData> = ({ title, date, description, thumbnail, placeholder }) => {
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
          {thumbnail && <Image className={style.image} src={thumbnail} alt={`Banner for ${title}`} width={500} height={300} />}
          <h2 className={style.title}>{title}</h2>
          <p className={style.date}>{date}</p>
          <p className={style.description}>{description}</p>
        </>
      )}
    </div>
  );
};

export default Event;