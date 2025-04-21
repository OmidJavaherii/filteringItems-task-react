# Product Filtering Application

A React application that demonstrates advanced filtering functionality for product listings.

## Features

- Dynamic product filtering by categories
- Multi-select filter options by product attributes
- URL-based filtering state (shareable filtered views)
- Responsive product card layout
- State management with Zustand

## Technology Stack

- React 19
- TypeScript
- Vite
- React Router DOM v7
- Zustand for state management
- TailwindCSS for styling

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn

### Installation

1. Clone the repository
2. Install the dependencies:
   ```
   npm install
   ```

### Development

Run the development server:
```
npm run dev
```

The application will be available at http://localhost:5173

### Build

Create a production build:
```
npm run build
```

Preview the production build:
```
npm run preview
```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components
- `/src/store` - Zustand store definitions
- `/src/data` - JSON data files
- `/src/utils` - Helper functions

## How It Works

The application uses:
- Zustand for global state management of filters
- URL parameters to maintain filter state between sessions
- React Router for navigation
- TailwindCSS for responsive design