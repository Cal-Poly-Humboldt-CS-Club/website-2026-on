'use client';

import React, { useState, useEffect } from 'react';
import EventList from '../../components/events/EventList';
import { EventCardData } from '../../lib/eventService';

const Page = () => {
    const pageResultLimit = 2;
    const [searchQuery, setSearchQuery] = useState('');
    const [lastSearchQuery, setLastSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [events, setEvents] = useState<EventCardData[]>([]);
    const [totalEvents, setTotalEvents] = useState(0);

    const addTemporaryEvents = (count: number) => {
        const newEvents = Array.from({ length: count }, (_, i) => ({
            id: `placeholder-${events.length + i + 1}`,
            title: `Placeholder ${events.length + i + 1}`,
            date: '',
            description: '',
            body: '',
            placeholder: true,
        }));
        setEvents((prevEvents) => [...prevEvents, ...newEvents]);
    };

    const removeTemporaryEvents = (count: number) => {
        setEvents((prevEvents) => prevEvents.slice(0, prevEvents.length - count));
    };

    const fetchEvents = async (page: number) => {
        const totalPlaceholders = (totalEvents == 0) ? pageResultLimit : totalEvents - ((page - 1) * pageResultLimit);
        addTemporaryEvents(totalPlaceholders);
        // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate slow network
        const res = await fetch(`/api/events?page=${page}&limit=${pageResultLimit}`);
        const data = await res.json();
        removeTemporaryEvents(totalPlaceholders);
        setEvents((prevEvents) => [...prevEvents, ...data.events]);
        setTotalEvents(data.totalEvents);
    };

    const handleSearch = async () => {
        // Already searched for this query
        if (searchQuery == lastSearchQuery) {
            return;
        }

        // Update last search query
        setLastSearchQuery(searchQuery);

        // New empty search query, so reset the events list
        if (searchQuery == '') {
            setCurrentPage(1);
            setIsSearching(false);
            setEvents([]);
            fetchEvents(1);
            return;
        }

        // Make new list from a new search
        setIsSearching(true);
        setCurrentPage(1);
        setEvents([]);
        addTemporaryEvents(pageResultLimit);
        // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate slow network
        const res = await fetch(`/api/search?query=${searchQuery}&limit=${pageResultLimit}`);
        const data = await res.json();
        removeTemporaryEvents(pageResultLimit);
        setEvents(data.events);
        setTotalEvents(data.totalEvents);
    };

    const handleClearSearch = () => {
        // Clears, resets page, emptys list, and fetches regular events
        setIsSearching(false);
        setCurrentPage(1);
        setSearchQuery('');
        setEvents([]);
        fetchEvents(1);
    };

    const handleLoadMore = async () => {
        const nextPage = currentPage + 1;

        // If we are searching, load more search results
        if (isSearching) {
            addTemporaryEvents(totalEvents - ((nextPage - 1) * pageResultLimit));
            // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate slow network
            const res = await fetch(`/api/search?query=${searchQuery}&page=${nextPage}&limit=${pageResultLimit}`);
            const data = await res.json();
            removeTemporaryEvents(totalEvents - ((nextPage - 1) * pageResultLimit));
            setEvents((prevEvents) => [...prevEvents, ...data.events]);

            return;
        }

        // Else, we are not searching, so load more regular events
        fetchEvents(nextPage);
        setCurrentPage(nextPage);
    };

    useEffect(() => {
        fetchEvents(1);
    }, []);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <input
                            type="text"
                            placeholder="Search Events"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                        <button onClick={handleClearSearch}>Reset</button>
                    </li>
                </ul>
            </nav>
            <EventList events={events} />
            {events.length < totalEvents && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
};

export default Page;