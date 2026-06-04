# User Preference & Cookie System

## Overview
The system uses cookies to track user selections and provide personalized experiences without requiring authentication.

## Cookies Used

### 1. `ide_user_id` (Unique User Identifier)
- **Value**: Auto-generated unique ID (e.g., `user_1234567890_abc123def`)
- **Expiration**: 1 year
- **Purpose**: Uniquely identify each user across the website
- **Auto-created**: Automatically generated on first visit if it doesn't exist

### 2. `ide_user_preference` (User Selection)
- **Values**: `need-help`, `help-others`, `explore`, or empty
- **Expiration**: 1 year
- **Purpose**: Store which path the user selected on the welcome screen
- **Behavior**: Only set after user makes a selection

## How It Works

1. **First Visit**: User sees welcome screen
2. **Selection**: User clicks one of three options (I Need Help, I Want to Help, Just Exploring)
3. **Cookie Set**: Selection is stored in `ide_user_preference`
4. **Routing**: User is redirected to appropriate page:
   - "I Need Help" → `/` (current homepage)
   - "I Want to Help" → `/help-others` (admin-like design with cool colors)
   - "Just Exploring" → `/explore` (educational design with warm colors)
5. **Return Visits**: User is recognized by `ide_user_id`, welcome screen doesn't show again

## Cookie Locations in Code

- **Hook**: `/hooks/use-user-preference.ts` - Main cookie management
  - `getOrCreateUserId()` - Get or create user ID
  - `setCookie()` - Set a cookie
  - `getCookie()` - Get a cookie value
  - `deleteCookie()` - Delete a cookie
  - `useUserPreference()` - React hook to access/modify preferences

- **Welcome Screen**: `/components/welcome-screen.tsx`
  - Calls `setPreference()` when user selects an option
  - Handles routing based on selection

- **Reset Component**: `/components/user-preference-reset.tsx`
  - Allows users to reset their preference via UI button
  - Located in site header

## Resetting Cookies - YES YOU CAN!

There are **three ways** to reset cookies anytime:

### 1. **User-Facing Reset Button**
- Click the "Reset" button in the site header
- Confirms before resetting
- Deletes both cookies and generates a new user ID
- User will see welcome screen again on next visit

### 2. **Browser Developer Tools**
Open browser console and run:
```javascript
document.cookie = 'ide_user_id=; max-age=0; path=/'
document.cookie = 'ide_user_preference=; max-age=0; path=/'
```

### 3. **Programmatic Reset**
In any component using the hook:
```typescript
import { useUserPreference } from '@/hooks/use-user-preference'

const { resetAll } = useUserPreference()
resetAll() // Resets everything
```

## Data Stored Per User

Each unique user (by `ide_user_id`) has:
- Unique identifier (`ide_user_id`)
- User preference selection (`ide_user_preference`)
- Expiration date (1 year from creation/last update)

## Persistence Details

- **Duration**: Cookies persist for **1 year** from last modification
- **Browser Clearing**: Deleted if user clears browser data/cookies
- **Device-Specific**: Each device/browser has separate cookies
- **Incognito Mode**: Cookies deleted when window closes
- **Server Access**: Cookies sent with every request (readable server-side)

## Three Distinct Pages

### "I Need Help" → `/` (Current Homepage)
- Warm, supportive design
- Focus on guides, resources, organizations
- Help-seeking messaging

### "I Want to Help" → `/help-others`
- Cool colors (slate, blue, emerald)
- Admin-like interface
- Organization partnerships
- Volunteer opportunities
- Stat metrics (people helped, organizations, etc.)

### "Just Exploring" → `/explore`
- Educational design (warm amber/orange)
- Mission and vision information
- Resource overview
- Learning-focused messaging
- About the organization

## Technical Implementation

**Cookie Format**: Standard HTTP cookies with SameSite=Lax for security
**Storage**: Client-side only (browser cookies)
**Read/Write**: Handled by `use-user-preference.ts` hook
**No Dependencies**: Pure JavaScript, no external libraries needed
