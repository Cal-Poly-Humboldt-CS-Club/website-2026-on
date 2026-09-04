// List of event cards
import React from 'react';

import EventCard from '@/components/events/EventCard';
import { EventCardData } from '@/lib/eventService';
import style from './EventList.module.css';

interface EventListProps {
    events: EventCardData[];
    className?: string;
}

const EventList: React.FC<EventListProps> = ({ events, className }) => {
    return (
        <>
        <div className={`${style.container} ${className}`}>
            {events.map((event) => (
                <EventCard
                    id={event.id}
                    unlisted={event.unlisted}
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