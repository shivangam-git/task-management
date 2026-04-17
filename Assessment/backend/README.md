# Task Manager Backend

A RESTful API built with Express.js and TypeScript for the Task Manager application.

## Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (Access + Refresh Token pattern)
- **Validation**: Zod

## Project Structure

```
backend/
├── src/
│   ├── controllers/      # Route controllers
│   │   ├── auth.controller.ts
│   │   └── task.controller.ts
│   ├── middleware/       # Express middleware
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│   ├── models/           # Mongoose models
│   │   ├── user.model.ts
│   │   └── task.model.ts
│   ├── routes/           # API routes
│   │   ├── auth.routes.ts
│   │   └── task.routes.ts
│   ├── utils/            # Utility functions
│   │   └── jwt.utils.ts
│   ├── validators/       # Zod validation schemas
│   │   ├── auth.validator.ts
│   │   └── task.validator.ts
│   └── index.ts          # App entry point
├── .env.example
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js v18 or higher
- MongoDB (local or cloud instance like MongoDB Atlas)

### Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
5. Update the `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   JWT_ACCESS_SECRET=your_secure_access_secret_key
   JWT_REFRESH_SECRET=your_secure_refresh_secret_key
   JWT_ACCESS_EXPIRES_IN=15m
   JWT_REFRESH_EXPIRES_IN=7d
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```

### Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive tokens |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/logout` | Invalidate refresh token |
| GET | `/api/auth/me` | Get current user (protected) |

### Task Routes (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks for the user |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/:id` | Get a single task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Query Parameters for GET /api/tasks

| Parameter | Type | Description |
|-----------|------|-------------|
| status | string | Filter by status (pending, in-progress, done) |
| priority | string | Filter by priority (low, medium, high) |
| sortBy | string | Sort field (createdAt, dueDate, priority) |
| sortOrder | string | Sort order (asc, desc) |
| search | string | Search in title and description |
| page | number | Page number for pagination |
| limit | number | Items per page |

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | - |
| JWT_ACCESS_SECRET | Secret for access tokens | - |
| JWT_REFRESH_SECRET | Secret for refresh tokens | - |
| JWT_ACCESS_EXPIRES_IN | Access token expiry | 15m |
| JWT_REFRESH_EXPIRES_IN | Refresh token expiry | 7d |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:3000 |

## Deployment

The backend can be deployed to any Node.js hosting platform:

- **Render.com** (Recommended - Free tier available)
- **Railway.app**
- **Cyclic.sh**

### Render Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
4. Add environment variables in the Render dashboard

## Known Limitations

- Refresh tokens are stored in the database (consider Redis for production)
- No rate limiting implemented

## License

MIT
