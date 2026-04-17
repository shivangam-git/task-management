# Task Manager Frontend

A modern task management application built with Next.js 14 (App Router) and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **State Management**: Zustand + React Query (TanStack Query)
- **Form Handling**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## Features

- ✅ User Authentication (Login/Register)
- ✅ JWT-based auth with token refresh
- ✅ Task CRUD Operations
- ✅ Task filtering by status and priority
- ✅ Task sorting by date, priority
- ✅ Search functionality
- ✅ Pagination
- ✅ Dashboard with statistics
- ✅ Dark mode toggle
- ✅ Responsive design
- ✅ Protected routes

## Project Structure

```
frontend/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── register/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── components/
│   │   ├── dashboard/        # Dashboard components
│   │   │   ├── Pagination.tsx
│   │   │   ├── StatsCards.tsx
│   │   │   ├── TaskCard.tsx
│   │   │   ├── TaskFilters.tsx
│   │   │   └── TaskForm.tsx
│   │   ├── layout/           # Layout components
│   │   │   └── Navbar.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── Select.tsx
│   │       └── TextArea.tsx
│   ├── hooks/                # Custom React hooks
│   │   └── useTasks.ts
│   ├── lib/                  # Utilities
│   │   ├── api.ts
│   │   └── validations.ts
│   ├── services/             # API services
│   │   ├── auth.service.ts
│   │   └── task.service.ts
│   ├── store/                # Zustand stores
│   │   ├── auth.store.ts
│   │   └── theme.store.ts
│   └── types/                # TypeScript types
│       └── index.ts
├── .env.example
├── .env.local
├── netlify.toml
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```
5. Update the `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_APP_NAME=Task Manager
   ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| NEXT_PUBLIC_API_URL | Backend API URL |
| NEXT_PUBLIC_APP_NAME | Application name |

## Deployment (Netlify)

### Prerequisites

1. Push your code to a GitHub repository
2. Create a Netlify account

### Deployment Steps

1. Log in to Netlify
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Select the frontend folder as the base directory
5. Netlify will auto-detect the Next.js configuration from `netlify.toml`
6. Add environment variables:
   - `NEXT_PUBLIC_API_URL` = Your deployed backend URL
   - `NEXT_PUBLIC_APP_NAME` = Task Manager
7. Click "Deploy site"

### Installing Netlify Plugin

The project already includes `netlify.toml` configuration. Just install the plugin:

```bash
npm install --save-dev @netlify/plugin-nextjs
```

## Task Fields

| Field | Type | Options |
|-------|------|---------|
| title | string | Required, max 200 chars |
| description | string | Optional, max 2000 chars |
| status | enum | pending, in-progress, done |
| priority | enum | low, medium, high |
| dueDate | date | Optional |

## Screenshots

### Dashboard (Light Mode)
- Statistics cards showing total, pending, in-progress, completed, and overdue tasks
- Task cards with edit/delete options
- Filters and search functionality

### Dashboard (Dark Mode)
- Full dark mode support
- Toggle via navbar button

## Known Limitations

- No offline support
- No real-time updates (can be added with polling or WebSockets)

## License

MIT
