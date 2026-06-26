# Ide Project - Complete Website Summary

## Overview
The Ide Project is a comprehensive support platform for exonerees (individuals who have been wrongfully convicted and later exonerated). It's a youth-led initiative that connects people nationwide with verified reentry support organizations, housing resources, job training programs, and community advocacy. The website provides accessible, practical guidance to help individuals rebuild their lives after exoneration.

---

## Core Purpose & Mission

**Vision**: A world where individuals who have experienced wrongful conviction receive comprehensive, compassionate support as they rebuild their lives and reconnect with society.

**Mission**: Connect exonerees nationwide with verified reentry support organizations, housing resources, job training programs, and community advocacy to ensure a successful transition home.

---

## Main Features & Pages

### 1. **Homepage (`/`)**
- Landing page with hero section
- Welcome banner for signed-in users ("Welcome back, [Name]!")
- Search functionality to explore resources
- Featured guides carousel showing popular topics
- Call-to-action buttons:
  - "I Need Help" - leads to guides/resources
  - "Help Others" - for supporters/advocates

### 2. **Authentication System**
- **Sign Up (`/sign-up`)**: Create account with email/password
- **Sign In (`/sign-in`)**: Login to existing account
- **Account/Profile (`/account`)**: View and edit profile information
  - Displays personalized welcome message
  - Shows user info (name, email)
  - Edit profile functionality
  - Session persistence across page refreshes
- **Header Indicators**: 
  - Green "online" status dot on user avatar when signed in
  - User dropdown menu with account links
  - "Signed In" badge in user menu
  - Sign Out button with automatic full page reload

### 3. **Main Resource Categories**

#### **Guides Section (`/guides`)**
Comprehensive step-by-step guides covering:
- **Legal & Rights**: Expungement of records, disclosure in interviews, legal documents, rights after exoneration, compensation options
- **Housing**: Affordable housing in Dallas, apartment applications, tenant rights, housing scams, roommate agreements
- **Employment**: Writing resume, interview prep, networking for job success, supportive employers, driver's license
- **Financial**: Budget checklist, building credit, understanding taxes, opening bank accounts, utility accounts
- **Health & Wellness**: Mental health resources, coping strategies, health insurance, medicaid application, processing trauma
- **Daily Life**: First week essentials, transportation (Dallas-specific), staying safe online, email/social media basics, family reconnection
- **Total**: 37+ comprehensive guide pages

#### **Employment Page (`/employment`)**
- Job opportunities and training programs
- Industry certification information
- Career paths for exonerees
- Employer resources and networking opportunities

#### **Housing Page (`/housing`)**
- Affordable housing resources in Dallas
- Apartment application process
- Tenant rights and protections
- Housing scam awareness
- Rental assistance programs

#### **Healthcare Page (`/healthcare`)**
- Insurance information (including Medicaid)
- Health resources and clinics
- Mental health support
- Wellness programs
- Health-related guide links

#### **Financial Literacy Page (`/financial-literacy`)**
- Money management basics
- Credit building strategies
- Banking and savings information
- Organizations offering financial counseling
- Budget planning resources

#### **General Resources Page (`/general-resources`)**
- Links to verified support organizations
- Government agencies and services
- Community programs
- National and local resources
- Organization verification information

#### **Organizations Page (`/organizations`)**
- Database of verified support organizations
- Organizations specializing in:
  - Legal advocacy
  - Direct reentry services
  - Healing and community support
- Organization descriptions, contact info, and services
- Networking information between organizations

### 4. **Q&A Community Section (`/qa`)**
- Community questions and answers
- Peer-to-peer support forum
- Anonymous question submission
- Community guidelines enforcement
- Experienced members sharing wisdom
- Topic categorization

### 5. **News & Updates (`/news`)**
- Latest news relevant to exonerees
- Policy updates affecting reentry
- Success stories from community members
- Event announcements
- Resource updates

### 6. **Explore/About (`/explore`)**
- Organization mission statement
- Vision and values
- Overview of all resources available
- Resource categories displayed with descriptions
- "Get Started" guidance for new visitors

### 7. **Help Others Page (`/help-others`)**
- Information for supporters and advocates
- Ways to contribute to the cause
- Volunteer opportunities
- Donation/funding information
- Partnership opportunities
- Community involvement options

### 8. **Support Page (`/support`)**
- Help and FAQ section
- Troubleshooting assistance
- User support resources
- Contact information for technical issues
- Community support options

### 9. **Contact Page (`/contact`)**
- Contact form for inquiries
- Multiple contact methods
- Response time information
- Organization contact details
- Feedback submission form

---

## Technical Architecture

### **Frontend**
- **Framework**: Next.js 16 with React 19.2
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui component library
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth button animations, page transitions, micro-interactions

### **Backend & Database**
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM for database queries
- **Authentication**: Better Auth with JWT tokens
- **Session Management**: HTTP-only cookies (7-day expiration)
- **API Routes**: Next.js API routes for backend logic

### **Authentication Flow**
1. User signs up/logs in with email and password
2. Session token stored in HTTP-only cookie
3. Server-side session retrieval via `/api/auth/session` endpoint
4. Header displays user info and status indicators
5. Protected pages check session validity
6. Sign-out triggers full page reload to reset UI

### **Key Database Tables**
- `user` - User profiles (id, email, name)
- `session` - Active sessions (token, expiration, userId)
- `account` - Account linking information

### **API Endpoints**
- `/api/auth/sign-up` - User registration
- `/api/auth/sign-in` - User login
- `/api/auth/sign-out` - User logout
- `/api/auth/session` - Get current user session
- `/api/auth/update-profile` - Update user profile
- `/api/auth/forgot-password` - Password reset (if implemented)

---

## User Experience Features

### **Sign-In Indicators**
- Avatar with green "online" dot in header
- Personalized welcome banner on homepage
- User dropdown menu with account links
- "Signed In" badge in profile menu
- Email display in user menu
- Current member-since date shown

### **Interactive Features**
- Search functionality across guides
- Featured guides carousel
- Q&A community forum
- Contact form with validation
- Organization directory with filtering
- Smooth page transitions and animations
- Loading states on buttons
- Mobile-responsive navigation

### **Animations & Polish**
- Smooth button hover/press effects (lift on hover, scale on click)
- Page fade-in animations
- Hamburger menu rotation (☰ to ✕)
- Dropdown animations with stagger
- Loading spinner on CTA buttons
- Smooth page transitions

---

## Mobile Experience

- **Responsive Design**: All pages optimized for mobile (351px+)
- **Mobile Navigation**: Hamburger menu on small screens
- **Touch-Friendly**: Large tap targets (48px minimum)
- **Logo Sizing**: "Ide Project" fits on one line on mobile (text-lg base, text-2xl on desktop)
- **Readable Text**: Proper font sizes and line heights for mobile reading
- **Single Column Layout**: Guides and resources stack vertically on mobile

---

## Content Features

### **Comprehensive Guides** (37 total)
Each guide includes:
- Clear, step-by-step instructions
- Practical tips and advice
- Organization recommendations
- Resource links
- Real-world scenarios
- Common mistakes to avoid
- Success stories or examples

### **Search & Discovery**
- Hero search bar on homepage
- Browse all resources by category
- Featured guides carousel
- Organization directory with descriptions
- Resource filtering by type

### **Community Elements**
- Q&A forum for peer support
- News and updates section
- Success stories (in news/explore)
- Community guidelines
- Feedback mechanisms via contact form

---

## Security & Privacy

- **Password Security**: Bcrypt hashing for stored passwords
- **Session Security**: HTTP-only cookies (not accessible via JavaScript)
- **CSRF Protection**: Built into Next.js
- **SQL Injection Prevention**: Parameterized queries via Drizzle ORM
- **Input Validation**: Form validation on signup/login
- **Email Privacy**: User email shown only to authenticated users
- **Data Scoping**: User data queries filtered by session userId

---

## Branding & Design

- **Logo**: "Ide Project" (reduced from "The Ide Project Youth Led Initiative")
- **Color Scheme**: 3-5 core colors with semantic design tokens
- **Typography**: 2 font families (one for headings, one for body)
- **Brand Badge**: "Youth Led Initiative" badge on hero section
- **Tone**: Compassionate, supportive, practical

---

## Performance Optimizations

- **Server-Side Rendering (SSR)**: Guide content pre-rendered
- **Code Splitting**: Dynamic imports for heavy components
- **Image Optimization**: Tailwind-based styling (no large images)
- **Caching**: Session data cached in memory
- **Fast Navigation**: Optimized API endpoints
- **Mobile-First CSS**: Minimal CSS for mobile, enhanced for desktop

---

## Future Enhancement Ideas

- User-saved resources/bookmarks
- Personalized resource recommendations
- Exoneree success story profiles
- Event calendar and notifications
- Direct messaging between users
- Admin dashboard for content management
- Analytics on resource usage
- Newsletter subscription
- Language translation support
- Mobile app version

---

## Summary

The Ide Project website is a comprehensive, compassionate digital platform dedicated to supporting exonerees through their reentry journey. It combines practical guides with community support, organization connections, and personalized user experiences. The platform is built with modern, performant technology and emphasizes accessibility, ease of use, and genuine human support for a vulnerable population deserving of comprehensive resources during their transition back into society.
