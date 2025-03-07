// Make a card for each event, it should have a title, date, and description

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

  // Generating colored placeholder for image if there is no thumbnail
  

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
          <Link href={`/events/${id}`} className={style.imageContainer}>
            <div className={style.date}>
              <p>{date}</p>
            </div>
            {thumbnail && <Image className={style.image} src={thumbnail} alt={`Banner for ${title}`} width={500} height={300} />}
          </Link>
          {/* <Link href='/events/microsoft-copilot-25'> */}
          <Link href={`/events/${id}`}>
            <h2 className={style.title}>
              {title}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRklEQVR4nO2Yu2rDQBBFz3c4tf8lSuNKuMgPJoV/KYbI2IUJxGkTssGwhQm7tnb2NYa5MJXQ1T2r0T4EJpPJpFlLYAN8AS6xtsAQ8Hzy1+b6HICVNPyHIPhlTQHfncBnLwHYZIaPAUwCn18JgKRtLusNeAz4Dv5aql+ysg0SNQLf9wow3givGmAdCB+CUQkwBsL+AM/3AHAtPNoBboVXDTAnvFqAueFVAqSE599+6bzwdQWITZXrK/cMftsxRVb0ZgCpI19MJQC6hS8B0DV8LkD38DkAkg+WyMlt5yt0sqsCUHLkt62n0dJt41ouZDV63rUCWBXq+W4AU4XwTQH2FcI3b6F3P1OIfkBFpG432vz5zgDy5OwNYN9AllzuAJ4CJr3qUwLwqiC48/UiAXgAjgrCH4EFQi08fY92Ovlni8ObTCYT1fUHGyA91qdVgIkAAAAASUVORK5CYII=" alt="external-link"></img>
            </h2>
          </Link>
          <p className={style.description}>{description}</p>
        </>
      )}
    </div>
  );
};

export default Event;