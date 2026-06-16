import { NextResponse } from "next/server";
import { Resend } from "resend";

const defaultRecipients = ["ricky@rykerflint.com", "dave@rykerflint.com"];
const defaultFrom =
  "Sun and Sand Realtor <contact@send.sunandsandrealtor.com>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
  source?: unknown;
  company?: unknown;
};

const cleanString = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  );

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

const getRecipients = () => {
  const configuredRecipients = process.env.CONTACT_TO_EMAILS?.split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  return configuredRecipients?.length ? configuredRecipients : defaultRecipients;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }

  if (cleanString(payload.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanString(payload.name, 120);
  const email = cleanString(payload.email, 254).toLowerCase();
  const phone = cleanString(payload.phone, 80);
  const interest = cleanString(payload.interest, 120);
  const message = cleanString(payload.message, 2000);
  const source = cleanString(payload.source, 80) || "Website contact form";

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please add your name, email, and message." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Los_Angeles",
  });

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    interest ? `Interest: ${interest}` : null,
    `Source: ${source}`,
    `Submitted: ${submittedAt} PT`,
    "",
    message,
  ].filter(Boolean);

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New Sun and Sand Realtor inquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr>
          <td style="padding: 8px 0; font-weight: 700;">Name</td>
          <td style="padding: 8px 0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 700;">Email</td>
          <td style="padding: 8px 0;">${escapeHtml(email)}</td>
        </tr>
        ${
          phone
            ? `<tr><td style="padding: 8px 0; font-weight: 700;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>`
            : ""
        }
        ${
          interest
            ? `<tr><td style="padding: 8px 0; font-weight: 700;">Interest</td><td style="padding: 8px 0;">${escapeHtml(interest)}</td></tr>`
            : ""
        }
        <tr>
          <td style="padding: 8px 0; font-weight: 700;">Source</td>
          <td style="padding: 8px 0;">${escapeHtml(source)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 700;">Submitted</td>
          <td style="padding: 8px 0;">${escapeHtml(submittedAt)} PT</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(
        message,
      )}</div>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM || defaultFrom,
    to: getRecipients(),
    replyTo: email,
    subject: `New Sun and Sand inquiry from ${name}`,
    html,
    text: lines.join("\n"),
    tags: [{ name: "source", value: "contact_form" }],
  });

  if (error) {
    console.error("Resend contact form error:", error);

    return NextResponse.json(
      { message: "Message could not be sent. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
