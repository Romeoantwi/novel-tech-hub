
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { applicantData } = await req.json();

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const emailHtml = `
      <h2>New Application Received - APEX Technologies</h2>
      <p>A new application has been submitted to join the APEX Technologies network.</p>
      
      <h3>Applicant Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${applicantData.fullName}</li>
        <li><strong>Email:</strong> ${applicantData.email}</li>
        <li><strong>Phone:</strong> ${applicantData.phone}</li>
        <li><strong>Expertise:</strong> ${applicantData.expertise}</li>
        <li><strong>Experience:</strong> ${applicantData.experience}</li>
        ${applicantData.portfolio ? `<li><strong>Portfolio:</strong> <a href="${applicantData.portfolio}">${applicantData.portfolio}</a></li>` : ''}
        ${applicantData.linkedIn ? `<li><strong>LinkedIn:</strong> <a href="${applicantData.linkedIn}">${applicantData.linkedIn}</a></li>` : ''}
        ${applicantData.github ? `<li><strong>GitHub:</strong> <a href="${applicantData.github}">${applicantData.github}</a></li>` : ''}
      </ul>
      
      <h3>Cover Letter:</h3>
      <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${applicantData.coverLetter}</p>
      
      <p>You can review and manage this application in your admin dashboard.</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'APEX Technologies <noreply@apextechnologies.com>',
        to: ['romeoantwi@gmail.com'],
        subject: `New Application: ${applicantData.fullName} - ${applicantData.expertise}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend API error:', error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log('Email sent successfully:', data);

    return new Response(
      JSON.stringify({ success: true, messageId: data.id }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error in send-application-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
