# Clerk Authentication Setup

This TanStack Start application has been configured with Clerk authentication following the official example from the TanStack Router repository.

## Setup Complete ✅

The following has been implemented:

1. **Dependencies Installed**
   - `@clerk/tanstack-react-start` - Clerk integration for TanStack Start

2. **Core Configuration**
   - ClerkProvider added to root route (`src/routes/__root.tsx`)
   - Server-side authentication with `getAuth()` 
   - User context available throughout the app

3. **Authentication Components**
   - Sign In button (modal mode) for signed-out users
   - User button (profile dropdown) for signed-in users
   - Protected route layout (`src/routes/_authed.tsx`)

4. **Routes Implemented**
   - `/` - Home page with authentication-aware content
   - `/dashboard` - Protected dashboard (requires authentication)
   - `/profile` - Protected user profile page

5. **UI Updates**
   - Header component shows navigation links based on auth status
   - Sign in/out buttons in the header
   - Protected routes automatically redirect to sign-in if not authenticated

## Getting Started

### 1. Get Your Clerk Keys

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application or select an existing one
3. Copy your Publishable Key and Secret Key

### 2. Configure Environment Variables

Update the `.env` file with your actual Clerk keys:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
CLERK_SECRET_KEY=sk_test_your_actual_secret_key_here
```

### 3. Run the Application

```bash
npm run dev
```

The application will start on http://localhost:3000

## Features

### Public Routes
- **Home Page (`/`)** - Shows different content for signed-in vs signed-out users

### Protected Routes
These routes require authentication and will show a sign-in form if accessed while signed out:
- **Dashboard (`/dashboard`)** - Shows user ID and protected content
- **Profile (`/profile`)** - Displays user profile information including avatar, email, and account details

### Authentication Flow
1. Users can sign in using the Sign In button in the header
2. Sign in opens in a modal for better UX
3. After signing in, users are redirected back to their original destination
4. Protected routes automatically handle authentication checks

## Node.js Compatibility Note

This setup includes a polyfill for the File API to support Node.js versions < 20. The polyfill is automatically applied when running the dev server through the `run-dev.js` wrapper script.

## File Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root route with ClerkProvider
│   ├── _authed.tsx          # Protected route layout
│   ├── _authed/
│   │   ├── dashboard.tsx    # Protected dashboard
│   │   └── profile.tsx      # Protected profile page
│   └── index.tsx            # Home page
├── components/
│   └── Header.tsx           # Navigation with auth-aware links
└── ...
```

## Next Steps

1. Set up your Clerk application settings (sign-in methods, social providers, etc.)
2. Customize the UI components and styling
3. Add more protected routes as needed
4. Implement additional Clerk features like organizations or user metadata

## Resources

- [Clerk Documentation](https://clerk.com/docs)
- [TanStack Router Documentation](https://tanstack.com/router)
- [Example Repository](https://github.com/TanStack/router/tree/main/examples/react/start-clerk-basic)