
# API Documentation

## Supabase Edge Functions

### send-application-email

**Purpose**: Sends email notifications when new applications are submitted.

**Endpoint**: `https://oeyehfuhmgwelttxwfew.supabase.co/functions/v1/send-application-email`

**Method**: POST

**Headers**:
```
Content-Type: application/json
Authorization: Bearer <supabase-anon-key>
```

**Request Body**:
```json
{
  "applicantData": {
    "fullName": "string",
    "email": "string",
    "phone": "string",
    "expertise": "string",
    "experience": "string",
    "portfolio": "string|null",
    "linkedIn": "string|null", 
    "github": "string|null",
    "coverLetter": "string"
  }
}
```

**Response**:
```json
{
  "success": true,
  "messageId": "string"
}
```

**Error Response**:
```json
{
  "error": "string"
}
```

## Database API (Supabase)

### Applications Table

**Insert Application**:
```javascript
const { data, error } = await supabase
  .from('applications')
  .insert({
    full_name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    expertise: 'Frontend Development',
    experience: '5 years',
    portfolio: 'https://johndoe.dev',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    cover_letter: 'I am passionate about...'
  });
```

**Fetch Applications** (Admin only):
```javascript
const { data, error } = await supabase
  .from('applications')
  .select('*')
  .order('created_at', { ascending: false });
```

**Update Application Status**:
```javascript
const { error } = await supabase
  .from('applications')
  .update({ status: 'approved' })
  .eq('id', applicationId);
```

## Authentication

The system uses Supabase Auth for admin authentication. Only users with the email `romeoantwi15@gmail.com` can access admin functions.

## Error Handling

All API endpoints return appropriate HTTP status codes:
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `500`: Internal Server Error

Error responses include descriptive error messages to help with debugging.
