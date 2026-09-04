'use client'
import React from 'react';
import SearchBox from "./SearchBox";
import Button from './Button';
import EventList from './events/EventList';
import { useEventSearch } from '../hooks/useEventSearch';

import styles from "./SearchSection.module.css";

interface SearchSectionProps {
    showFindMoreButton?: boolean;
    numberOfResults?: number;
}

const SearchSection: React.FC<SearchSectionProps> = ({ showFindMoreButton = true, numberOfResults = 1 }) => {
    const {
        searchQuery,
        setSearchQuery,
        events,
        totalEvents,
        hasLoaded,
        isSearching,
        isLoadingMore,
        handleSearch,
        handleLoadMore,
    } = useEventSearch(numberOfResults);

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
                    onSearch={() => handleSearch(searchQuery)}
                    isLoading={isSearching}
                />

                {showFindMoreButton && (
                    <Button href='/events'>
                    Find more events
                    </Button>
                )}
            </div>

            {isSearching && events.length === 0 &&
                <span className={styles.loader_globe}></span>
            }
            {!isSearching && !isLoadingMore && hasLoaded && events.length === 0 &&
                <p className={styles.noEvents}>No events found</p>
            }
            {events.length > 0 && <EventList events={events} />}
            
            {events.length < totalEvents && (
                <Button
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    className={isLoadingMore ? styles.loadingButton : ''}
                >
                    {isLoadingMore && <span className={styles.loader}></span>}
                    Load More
                </Button>
            )}
        </>
    );
};

export default SearchSection;