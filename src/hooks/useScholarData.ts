'use client';

import { useState, useEffect } from 'react';

interface ScholarData {
  citations: number;
  hIndex: number;
  i10Index: number;
  publications: number;
  recentCitations: number[];
  lastUpdated: string;
  error?: string;
}

const CACHE_KEY = 'scholar-data-cache-v2'; // Changed cache key to force refresh
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function useScholarData() {
  const [data, setData] = useState<ScholarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScholarData() {
      try {
        // Check if we have cached data that's still fresh
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data: storedData, timestamp } = JSON.parse(cachedData);
          const now = Date.now();
          
          // If data is less than 24 hours old, use cached data
          if (now - timestamp < CACHE_DURATION) {
            console.log('Using cached Google Scholar data');
            setData(storedData);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh data if no cache or cache is expired
        console.log('Fetching fresh Google Scholar data');
        const response = await fetch('/api/scholar-data');
        if (!response.ok) {
          throw new Error('Failed to fetch scholar data');
        }
        const scholarData = await response.json();
        
        // Cache the fresh data
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: scholarData,
          timestamp: Date.now()
        }));
        
        setData(scholarData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // Set fallback data on error
        const fallbackData = {
          citations: 15,
          hIndex: 2,
          i10Index: 1,
          publications: 2,
          recentCitations: [3, 5, 7],
          lastUpdated: new Date().toISOString()
        };
        setData(fallbackData);
        
        // Cache fallback data to avoid repeated API calls on errors
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: fallbackData,
          timestamp: Date.now()
        }));
      } finally {
        setLoading(false);
      }
    }

    fetchScholarData();
  }, []);

  return { data, loading, error };
}
