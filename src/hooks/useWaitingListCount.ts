import { useState, useEffect } from 'react';
import nocodbService from '@/lib/nocodb';

export const useWaitingListCount = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await nocodbService.getWaitingListCount();
        
        if (response.success) {
          setCount(response.data.count);
        } else {
          setError(response.message || 'Failed to fetch count');
          // Set a fallback count if API fails
          setCount(4);
        }
      } catch (err) {
        console.error('Error fetching waiting list count:', err);
        setError('Failed to fetch count');
        // Set a fallback count if API fails
        setCount(4);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();

    // Optional: Set up periodic refresh every 5 minutes
    const interval = setInterval(fetchCount, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { count, isLoading, error };
};
