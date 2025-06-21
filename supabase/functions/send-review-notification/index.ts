
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ReviewNotificationRequest {
  client_name: string;
  client_email: string;
  rating: number;
  review_text: string;
  project_type?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { client_name, client_email, rating, review_text, project_type }: ReviewNotificationRequest = await req.json();

    console.log("Received review notification:", { client_name, client_email, rating, project_type });

    const stars = "⭐".repeat(rating);
    const projectTypeText = project_type ? `<p><strong>Project Type:</strong> ${project_type}</p>` : '';

    const emailResponse = await resend.emails.send({
      from: "Phaemos Technologies <onboarding@resend.dev>",
      to: ["romeoantwi15@gmail.com"],
      subject: `New Review Submitted - ${rating} Stars from ${client_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Review Submitted for Phaemos Technologies</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #334155;">Client Details:</h3>
            <p><strong>Name:</strong> ${client_name}</p>
            <p><strong>Email:</strong> ${client_email}</p>
            <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
            ${projectTypeText}
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #334155;">Review:</h3>
            <p style="line-height: 1.6; color: #475569;">${review_text}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              This review was submitted through the Phaemos Technologies website and is pending approval.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Review notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-review-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
