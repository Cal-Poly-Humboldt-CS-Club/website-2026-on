import { useState, useCallback } from 'react';
import { EventCardData } from '../lib/eventService';

type LoadingAction = 'idle' | 'search' | 'loadMore';

export function useEventSearch(pageResultLimit = 10) {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState<EventCardData[]>([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loadingAction, setLoadingAction] = useState<LoadingAction>('idle');
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEvents = useCallback(async (query: string, page: number) => {   
    try {
      const endpoint = query
        ? `/api/search?query=${query}&page=${page}&limit=${pageResultLimit}`
        : `/api/events?page=${page}&limit=${pageResultLimit}`;
      const res = await fetch(endpoint);
      const data = await res.json();
      if (page === 1) {
        setEvents(data.events);
      } else {
        setEvents((prev) => [...prev, ...data.events]);
      }
      setTotalEvents(data.totalEvents);
      setHasLoaded(true);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoadingAction('idle');
    }
  }, [pageResultLimit]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setLoadingAction('search');
    fetchEvents(query, 1);
  }, [fetchEvents]);

  const handleLoadMore = useCallback(() => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setLoadingAction('loadMore');
    fetchEvents(searchQuery, nextPage);
  }, [currentPage, fetchEvents, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    events,
    totalEvents,
    hasLoaded,
    loadingAction,
    isSearching: loadingAction === 'search',
    isLoadingMore: loadingAction === 'loadMore',
    handleSearch,
    handleLoadMore,
  };
}