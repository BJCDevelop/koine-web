import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const roleLabel: Record<string, string> = {
  directivo: "Directivo/a",
  docente: "Docente",
  familia: "Familia",
  otro: "Otro",
};

export async function POST(req: NextRequest) {
  const { name, email, role, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Koiné Web <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `Nueva consulta de ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #C4622D;">Nueva consulta desde koine.edu.ar</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; font-weight: bold;">Nombre</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Soy</td><td style="padding: 8px;">${roleLabel[role] ?? role ?? "—"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Mensaje</td><td style="padding: 8px; white-space: pre-wrap;">${message}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Error al enviar el email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
