import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Job Board</h3>
            <p className="text-sm text-muted-foreground">
              Find your next opportunity with our curated job listings.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  All Jobs
                </Link>
              </li>
              <li>
                <Link href="#remote" className="text-muted-foreground hover:text-primary transition-colors">
                  Remote Jobs
                </Link>
              </li>
              <li>
                <Link href="#companies" className="text-muted-foreground hover:text-primary transition-colors">
                  Companies
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#career-advice" className="text-muted-foreground hover:text-primary transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="#salary-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Job Board. All rights reserved.</p>
          <p className="mt-2">
            Powered by{' '}
            <Link href="https://nextjs.org" className="underline hover:text-primary">
              Next.js
            </Link>
            {' '}and{' '}
            <Link href="https://sheets.google.com" className="underline hover:text-primary">
              Google Sheets
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}