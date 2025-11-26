import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, phone, email, message });

    // Validate input
    if (!name || !phone || !email) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Моля, попълнете всички задължителни полета" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email using Resend API directly
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Prefabrik House <onboarding@resend.dev>",
        to: ["pavlovas@abv.bg"],
        subject: `Ново запитване от ${name}`,
        html: `
          <h1>Ново запитване от контактната форма</h1>
          <p><strong>Име:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Имейл:</strong> ${email}</p>
          <p><strong>Съобщение:</strong></p>
          <p>${message || "Няма съобщение"}</p>
          <hr />
          <p><small>Това съобщение е изпратено от контактната форма на сайта.</small></p>
        `,
      }),
    });

    const result = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Error from Resend:", result);
      return new Response(
        JSON.stringify({ error: result.message || "Failed to send email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully:", result);

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
