import { useState, useCallback } from 'react';
import { EventCardData } from '../lib/eventService';

export function useEventSearch(pageResultLimit = 10) {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState<EventCardData[]>([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEvents = useCallback(async (query: string, page: number) => {
    setIsLoading(true);
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
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  }, [pageResultLimit]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    fetchEvents(query, 1);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchEvents(searchQuery, nextPage);
  };

  return {
    searchQuery,
    setSearchQuery,
    events,
    totalEvents,
    isLoading,
    handleSearch,
    handleLoadMore,
  };
}