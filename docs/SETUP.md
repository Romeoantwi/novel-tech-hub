
# Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Supabase account
- Resend account (for email notifications)

## Environment Setup

### 1. Supabase Configuration
The project is already connected to Supabase with the following configuration:
- **Project URL**: `https://oeyehfuhmgwelttxwfew.supabase.co`
- **Anon Key**: Already configured in the project

### 2. Required Secrets
The following secrets need to be configured in Supabase:
- `RESEND_API_KEY`: Your Resend API key for email notifications

### 3. Email Configuration
The system uses Resend for email notifications. The current configuration:
- **From Address**: `APEX Technologies <onboarding@resend.dev>`
- **To Address**: `romeoantwi15@gmail.com`
- **Subject**: Dynamic based on applicant details

## Installation Steps

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd apex-technologies
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Supabase Secrets
1. Go to your Supabase dashboard
2. Navigate to Settings > Functions
3. Add the following secret:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Deployment

### Using Lovable
The project is already deployed on Lovable. Any changes pushed to the connected GitHub repository will automatically deploy.

### Manual Deployment
For manual deployment to other platforms:

1. **Build the project**:
```bash
npm run build
```

2. **Deploy the built files** from the `dist` folder to your hosting provider.

3. **Configure environment variables** on your hosting platform with the same Supabase configuration.

## Admin Access
- **URL**: `/admin`
- **Access**: Only `romeoantwi15@gmail.com` can access the admin panel
- **Features**: View, review, approve/reject applications
