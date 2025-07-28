# Movie Explorer App 🎬

A modern React Native mobile application built with Expo that allows users to discover, search, and explore movies with detailed information and streaming provider data.

## Features

### 🏠 Home Screen
- **Trending Movies**: Horizontal scrollable list of currently trending movies
- **Latest Movies**: Grid layout displaying the latest popular movies
- **Search Integration**: Quick access to search functionality
- **Beautiful UI**: Dark theme with gradient backgrounds and modern design

### 🔍 Search Functionality
- **Real-time Search**: Debounced search with 500ms delay for optimal performance
- **Search Analytics**: Tracks search queries and results using Appwrite backend
- **Grid Results**: Displays search results in a responsive 3-column grid
- **Empty States**: Helpful messages when no results are found

### 📱 Movie Details
- **Comprehensive Information**: 
  - Movie title, release year, runtime
  - User ratings and vote counts
  - Detailed overview and genres
  - Budget and revenue information
  - Production companies
- **Streaming Providers**: Shows where the movie is available to stream, rent, or buy
- **High-quality Posters**: Full-screen movie posters
- **Navigation**: Easy back navigation with custom button

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with file-based routing
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **API**: The Movie Database (TMDB) API
- **Backend**: Appwrite for search analytics
- **State Management**: Custom hooks with useFetch
- **TypeScript**: Full type safety throughout the app

## Project Structure

```
app/
├── (tabs)/           # Tab navigation screens
│   ├── index.tsx     # Home screen with trending/latest movies
│   └── search.tsx    # Search functionality
├── movies/
│   └── [id].tsx     # Dynamic movie details page
├── components/       # Reusable UI components
│   ├── MovieCard.tsx
│   ├── SearchBar.tsx
│   ├── StreamingProviders.tsx
│   └── TrendingCard.tsx
services/
├── api.ts           # TMDB API integration
├── appwrite.ts      # Appwrite backend services
└── useFetch.ts      # Custom fetch hook
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env` file with:
   ```
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your preferred platform**
   - iOS Simulator: Press `i`
   - Android Emulator: Press `a`
   - Expo Go: Scan QR code with Expo Go app

## Key Components

- **MovieCard**: Displays movie posters with hover effects
- **TrendingCard**: Specialized card for trending movies with ranking
- **SearchBar**: Custom search input with debouncing
- **StreamingProviders**: Shows available streaming platforms
- **useFetch Hook**: Custom hook for API calls with loading/error states

## API Integration

The app integrates with The Movie Database (TMDB) API to fetch:
- Movie search results
- Movie details and metadata
- Streaming provider information
- Trending and popular movies

## Design Features

- **Dark Theme**: Consistent dark color scheme
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Native React Native animations
- **Modern UI**: Clean, minimalist design with proper spacing
- **Loading States**: Activity indicators for better UX

## Development

Built with modern React Native practices including:
- TypeScript for type safety
- Custom hooks for reusable logic
- File-based routing with Expo Router
- Tailwind CSS styling with NativeWind
- Proper error handling and loading states
