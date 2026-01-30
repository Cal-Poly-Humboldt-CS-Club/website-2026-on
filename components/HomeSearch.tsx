'use client'
import React from 'react';
import SearchBox from "../components/SearchBox";
import Button from './Button';
import EventList from './events/EventList';
import { useEventSearch } from '../hooks/useEventSearch';

import styles from "./HomeSearch.module.css";

// interface Event {
//     id: number;
//     name: string;
//     date: string;
// }

const HomeSearch: React.FC = () => {
    const {
        searchQuery,
        setSearchQuery,
        events,
        isLoading,
        handleSearch,
        handleLoadMore,
    } = useEventSearch(5); // Limit to 5 results per page

    return (
        <>
            <div className={styles.nav}>
                <SearchBox 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onSearch={() => handleSearch(searchQuery)}/>

                <Button>
                Find more events
                </Button>

            </div>

            <EventList events={events} />
            {isLoading && <p>Loading...</p>}
            {events.length > 0 && (
                <Button onClick={handleLoadMore}>Load More</Button>
            )}
        </>
    );
};

export default HomeSearch;