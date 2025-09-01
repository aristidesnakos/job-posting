# Job Posting Template

A modern, production-ready job board template that uses Google Sheets as a database. Built with Next.js 15, TypeScript, and TailwindCSS.

## ✨ Features

- 📊 **Google Sheets as CMS** - No database setup required
- 🎨 **Modern UI** - Built with Shadcn UI and TailwindCSS
- 🔍 **Search & Filters** - Filter by job type, location, and keywords
- ⚡ **Fast Performance** - Built-in caching and optimization
- 📱 **Fully Responsive** - Works on all devices
- 🔒 **Type Safe** - Full TypeScript support
- 🚀 **Easy Deployment** - One-click deploy to Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ and pnpm
- Google account
- GitHub account (for deployment)

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/job-posting-template.git
cd job-posting-template

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
```

### 2. Google Sheets Setup

1. **Create a Google Sheet** with these columns:
   ```
   | Title | Company | Location | Type | Salary | Description | Posted | URL |
   ```

2. **Add sample data** to test the application

3. **Note the Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
   ```

### 3. Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select existing)
3. **Enable Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. **Create Service Account**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Fill in details and grant "Viewer" role
   - Click "Done"

5. **Generate Private Key**:
   - Click on the service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key" > "JSON"
   - Download and save the file

6. **Share Sheet with Service Account**:
   - Copy the service account email (ends with `.iam.gserviceaccount.com`)
   - Open your Google Sheet
   - Click "Share" and add the service account email as "Viewer"

### 4. Configure Environment

Edit `.env.local` with your credentials:

```env
GOOGLE_SHEETS_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Job Board
```

### 5. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your job board!

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/job-posting-template&env=GOOGLE_SHEETS_ID,GOOGLE_SERVICE_ACCOUNT_EMAIL,GOOGLE_PRIVATE_KEY,NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_SITE_NAME)

Or deploy manually:

1. Push code to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Alternative Deployment Options

- **Netlify**: Use `@netlify/plugin-nextjs`
- **Railway/Render**: Docker deployment ready
- **Self-hosted**: Use the included Dockerfile

## 📋 User Deployment Checklist

- [ ] Create Google Sheet with required columns
- [ ] Set up Google Cloud project and enable Sheets API
- [ ] Create service account and download credentials
- [ ] Share Sheet with service account email
- [ ] Configure environment variables
- [ ] Test locally with `pnpm dev`
- [ ] Deploy to hosting platform
- [ ] Add production environment variables

## 🛠 Customization

### Modify Site Branding
Edit `config/site.ts` and component files in `components/`

### Change Color Scheme
Update CSS variables in `app/globals.css`

### Add Job Types
Modify the type definitions in `types/index.ts`

### Extend Filters
Edit `components/JobFilters.tsx` to add more filter options

## 📊 Google Sheets Format

Your sheet should have these columns (in this exact order):

| Column | Description | Example |
|--------|-------------|---------|
| Title | Job title | "Senior Developer" |
| Company | Company name | "Tech Corp" |
| Location | Job location | "San Francisco, CA" |
| Type | Job type | "full-time" / "part-time" / "contract" / "remote" |
| Salary | Salary range | "$100k - $150k" |
| Description | Job description | "We are looking for..." |
| Posted | Date posted | "2025-01-15" |
| URL | Application link | "https://apply.example.com" |

## 🐛 Troubleshooting

### "Cannot read sheets"
- Verify Sheet is shared with service account email
- Check API is enabled in Google Cloud Console
- Confirm Sheet ID is correct

### "Invalid credentials"
- Check private key format (keep \n characters)
- Verify service account email
- Ensure quotes are preserved around private key

### No jobs displaying
- Check Sheet has data starting from row 2
- Verify column order matches format above
- Check browser console for errors

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/jobs/          # API endpoints
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── JobCard.tsx       # Job card component
│   ├── JobList.tsx       # Job list container
│   ├── JobFilters.tsx    # Filter sidebar
│   └── ui/               # Shadcn UI components
├── lib/                   # Utilities
│   ├── google-sheets.ts  # Sheets API client
│   └── cache.ts          # Caching logic
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
└── config/                # Configuration

```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this template for any purpose.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [Shadcn UI](https://ui.shadcn.com)
- Styled with [TailwindCSS](https://tailwindcss.com)
- Data storage via [Google Sheets](https://sheets.google.com)

---

**Need help?** Open an issue on GitHub or check the [Implementation Summary](./IMPLEMENTATION_SUMMARY.md) for detailed setup instructions.
