import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const roleLabel: Record<string, string> = {
  directivo: "Directivo/a",
  docente: "Docente",
  familia: "Familia",
  otro: "Otro",
};

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const ROW_BORDER = "border-bottom: 1px solid #E8DDD5;";
const LABEL_STYLE = 'style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; color: #2C1810; text-transform: uppercase; letter-spacing: 0.5px;"';
const VALUE_STYLE = 'style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #4A3728; line-height: 1.6;"';
const TD_LABEL = `style="padding: 16px 20px 16px 0; vertical-align: top; width: 90px; ${ROW_BORDER}"`;
const TD_VALUE = `style="padding: 16px 0; vertical-align: top; ${ROW_BORDER}"`;

function dataRow(label: string, value: string, isLink = false): string {
  const valueCell = isLink
    ? `<a href="mailto:${esc(value)}" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #1B6EF3; text-decoration: none;">${esc(value)}</a>`
    : `<span ${VALUE_STYLE}>${esc(value)}</span>`;
  return `
    <tr>
      <td ${TD_LABEL}><span ${LABEL_STYLE}>${label}</span></td>
      <td ${TD_VALUE}>${valueCell}</td>
    </tr>`;
}

function messageRow(value: string): string {
  return `
    <tr>
      <td style="padding: 16px 20px 16px 0; vertical-align: top; width: 90px;"><span ${LABEL_STYLE}>Mensaje</span></td>
      <td style="padding: 16px 0; vertical-align: top;"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #4A3728; line-height: 1.6; white-space: pre-wrap;">${esc(value)}</span></td>
    </tr>`;
}

export async function POST(req: NextRequest) {
  const { name, email, phone, role, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan campos requeridos." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #FDF8F3;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FDF8F3;">
    <tr>
      <td align="center" style="padding: 32px 16px;">

        <table cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td bgcolor="#C4622D" style="background-color: #C4622D; padding: 32px 40px; text-align: center; border-radius: 8px 8px 0 0;">
              <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: normal; color: #FFFFFF; letter-spacing: 2px;">Koiné</p>
              <p style="margin: 6px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #FFFFFF; letter-spacing: 1.5px; text-transform: uppercase;">Consultora Educativa</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td bgcolor="#FDF8F3" style="background-color: #FDF8F3; padding: 40px 40px 32px;">
              <p style="margin: 0 0 28px; font-family: Georgia, 'Times New Roman', serif; font-size: 20px; font-weight: normal; color: #C4622D;">Nueva consulta desde koineconsultora.com.ar</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid #E8DDD5;">
                ${dataRow("Nombre", name)}
                ${dataRow("Email", email, true)}
                ${phone ? dataRow("Teléfono", phone) : ""}
                ${dataRow("Soy", roleLabel[role] ?? role ?? "—")}
                ${messageRow(message)}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td bgcolor="#2C1810" style="background-color: #2C1810; padding: 20px 40px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #FDF8F3; letter-spacing: 0.5px;">koineconsultora.com.ar</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "Koiné Web <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `Nueva consulta de ${name}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Error al enviar el email." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
