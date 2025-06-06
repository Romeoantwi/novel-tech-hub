
# APEX Technologies - Application System

## Overview
This is a web application for APEX Technologies that allows skilled tech professionals to apply to join their network. The system includes an application form, admin dashboard, and email notifications.

## Features
- ✅ Public application form for tech professionals
- ✅ Admin dashboard to manage applications
- ✅ Email notifications when new applications are submitted
- ✅ Secure authentication for admin access
- ✅ Database storage with Supabase
- ✅ Responsive design with Tailwind CSS

## Tech Stack
- **Frontend**: React, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (Database, Authentication, Edge Functions)
- **Email**: Resend API
- **Deployment**: Lovable

## Project Structure
```
src/
├── components/
│   ├── forms/               # Form components
│   │   ├── PersonalInfoForm.tsx
│   │   ├── ProfessionalInfoForm.tsx
│   │   ├── SocialLinksForm.tsx
│   │   └── CoverLetterForm.tsx
│   ├── ApplicationForm.tsx  # Main application form
│   ├── AdminDashboard.tsx   # Admin interface
│   └── ui/                  # Reusable UI components
├── pages/
│   ├── Index.tsx           # Home page
│   └── Admin.tsx           # Admin page
└── integrations/
    └── supabase/           # Supabase configuration

supabase/
└── functions/
    └── send-application-email/  # Email notification function
```

## Database Schema
The application uses a Supabase PostgreSQL database with the following main table:

### Applications Table
- `id` (UUID, Primary Key)
- `full_name` (Text, Required)
- `email` (Text, Required)
- `phone` (Text, Required)
- `expertise` (Text, Required)
- `experience` (Text, Required)
- `portfolio` (Text, Optional)
- `linkedin` (Text, Optional)
- `github` (Text, Optional)
- `cover_letter` (Text, Required)
- `status` (Text, Default: 'pending')
- `created_at` (Timestamp)
