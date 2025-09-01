import { NextResponse } from 'next/server';
import { getJobs } from '@/lib/google-sheets';

export async function GET(request: Request) {
  try {
    const jobs = await getJobs();
    
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const location = searchParams.get('location');
    const search = searchParams.get('search');
    
    let filteredJobs = jobs;
    
    if (type) {
      filteredJobs = filteredJobs.filter(job => job.type === type);
    }
    
    if (location) {
      filteredJobs = filteredJobs.filter(job => 
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (search) {
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return NextResponse.json(filteredJobs);
  } catch (error) {
    // Log error internally without console
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch jobs', details: errorMessage },
      { status: 500 }
    );
  }
}