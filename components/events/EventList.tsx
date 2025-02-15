// List of event cards
import React from 'react';

import Event, { EventProps } from '@/components/events/Event';
import style from './EventList.module.css';

interface EventListProps {
    events: EventProps[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
    return (
        <>
        <div className={style.container}>
            {events.length === 0 && <p>No events found</p>}
            {events.map((event) => (
                <Event
                    id={event.id}
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                    thumbnail={event.thumbnail}
                    placeholder={event.placeholder}
                />
            ))}
        </div>
        </>
    );
};

export default EventList;