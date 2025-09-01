'use client';

import { useState, useEffect } from 'react';
import { Job } from '@/types';

interface UseJobsOptions {
  search?: string;
  type?: string;
  location?: string;
}

export function useJobs(options: UseJobsOptions = {}) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        if (options.search) params.append('search', options.search);
        if (options.type) params.append('type', options.type);
        if (options.location) params.append('location', options.location);

        const queryString = params.toString();
        const url = queryString ? `/api/jobs?${queryString}` : '/api/jobs';

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [options.search, options.type, options.location]);

  return { jobs, loading, error };
}