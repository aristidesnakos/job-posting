import { google } from 'googleapis';
import { Job } from '@/types';
import { jobCache } from './cache';

export async function getJobs(): Promise<Job[]> {
  const cached = jobCache.get('all-jobs') as Job[] | null;
  if (cached) return cached;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: 'Sheet1!A2:H',
  });

  const rows = response.data.values || [];
  const jobs: Job[] = rows.map((row, index) => ({
    id: `job-${index}`,
    title: row[0] || '',
    company: row[1] || '',
    location: row[2] || '',
    type: (row[3] || 'full-time') as Job['type'],
    salary: row[4],
    description: row[5] || '',
    postedDate: row[6] || new Date().toISOString(),
    applicationUrl: row[7] || '#',
  }));

  jobCache.set('all-jobs', jobs);
  
  return jobs;
}