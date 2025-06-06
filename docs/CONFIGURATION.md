
# Configuration Guide

## Admin Account Setup
The admin account has been created with:
- **Email**: `romeoantwi15@gmail.com`
- **Password**: `Kelvindiedbuthelives`

### How to Access Admin Panel
1. Click the Settings icon (⚙️) in the header
2. Login with the credentials above
3. You'll be redirected to the admin dashboard

## Phone Number Configuration
The "Schedule a Call" button is configured with your phone number: **0546906739**

### How to Change the Phone Number
1. Open `src/components/Header.tsx`
2. Find the `handleScheduleCall` function
3. Update the phone number in this line:
   ```typescript
   window.open('tel:+233546906739', '_self');
   ```
4. Change `+233546906739` to your new number (include country code)

## Contact Form Configuration
The contact form now sends emails to `romeoantwi15@gmail.com` using the Resend API.

### Email Setup
- **From**: `APEX Technologies <onboarding@resend.dev>`
- **To**: `romeoantwi15@gmail.com`
- **Function**: `send-contact-message`

### How to Change Email Address
1. Open `supabase/functions/send-contact-message/index.ts`
2. Find the line with `to: ["romeoantwi15@gmail.com"]`
3. Replace with your new email address

## Important Notes
- The Resend API key must be configured in Supabase secrets
- Phone numbers should include country code for international calls
- Admin access is restricted to `romeoantwi15@gmail.com` only
