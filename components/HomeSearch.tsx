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
        totalEvents,
        isLoading,
        handleSearch,
        handleLoadMore,
    } = useEventSearch(1); // Limit to 4 results per page

    // Automatically search for blank when component mounts to show initial events
    React.useEffect(() => {
        handleSearch('');
    }, [handleSearch]);

    return (
        <>
            <div className={styles.nav}>
                <SearchBox 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onSearch={() => handleSearch(searchQuery)}/>

                <Button href='/events'>
                Find more events
                </Button>
            </div>

            <EventList events={events} />
            
            {events.length < totalEvents && (
                <Button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className={isLoading ? styles.loadingButton : ''}
                >
                    {isLoading && <span className={styles.loader}></span>}
                    Load More
                </Button>
            )}
        </>
    );
};

export default HomeSearch;