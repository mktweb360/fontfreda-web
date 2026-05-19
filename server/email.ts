import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

export function getEmailTransporter() {
  if (!transporter) {
    const smtpHost = process.env.SMTP_HOST || "mail.fontfreda.net";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER || "info@fontfreda.net";
    const smtpPassword = process.env.SMTP_PASSWORD || "";

    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });
  }
  return transporter;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

export interface ReservaFormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fechaEntrada: string;
  fechaSalida: string;
  nombreMascota: string;
  tipoMascota: string;
  raza?: string;
  edad?: string;
  requisitosEspeciales?: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const transporter = getEmailTransporter();

  const htmlContent = `
    <h2>Nueva consulta de contacto</h2>
    <p><strong>Nombre:</strong> ${data.nombre}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Teléfono:</strong> ${data.telefono}</p>
    <p><strong>Asunto:</strong> ${data.asunto}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${data.mensaje.replace(/\n/g, "<br>")}</p>
  `;

  // Email to owner
  await transporter.sendMail({
    from: process.env.SMTP_USER || "info@fontfreda.net",
    to: "info@fontfreda.net",
    subject: `Nueva consulta: ${data.asunto}`,
    html: htmlContent,
    replyTo: data.email,
  });

  // Confirmation email to client
  const confirmationHtml = `
    <h2>Hemos recibido tu consulta</h2>
    <p>Hola ${data.nombre},</p>
    <p>Gracias por contactarnos. Hemos recibido tu consulta y nos pondremos en contacto contigo pronto.</p>
    <p><strong>Datos de tu consulta:</strong></p>
    <p><strong>Asunto:</strong> ${data.asunto}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${data.mensaje.replace(/\n/g, "<br>")}</p>
    <p>Un saludo,<br>Equipo Fontfreda</p>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_USER || "info@fontfreda.net",
    to: data.email,
    subject: "Hemos recibido tu consulta - Fontfreda",
    html: confirmationHtml,
  });
}

export async function sendReservaEmail(data: ReservaFormData) {
  const transporter = getEmailTransporter();

  const htmlContent = `
    <h2>Nueva solicitud de reserva</h2>
    <p><strong>Nombre:</strong> ${data.nombre}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Teléfono:</strong> ${data.telefono}</p>
    <p><strong>Servicio:</strong> ${data.servicio}</p>
    <p><strong>Fecha de entrada:</strong> ${data.fechaEntrada}</p>
    <p><strong>Fecha de salida:</strong> ${data.fechaSalida}</p>
    <p><strong>Nombre de la mascota:</strong> ${data.nombreMascota}</p>
    <p><strong>Tipo de mascota:</strong> ${data.tipoMascota}</p>
    ${data.raza ? `<p><strong>Raza:</strong> ${data.raza}</p>` : ""}
    ${data.edad ? `<p><strong>Edad:</strong> ${data.edad}</p>` : ""}
    ${data.requisitosEspeciales ? `<p><strong>Requisitos especiales:</strong> ${data.requisitosEspeciales}</p>` : ""}
  `;

  // Email to owner
  await transporter.sendMail({
    from: process.env.SMTP_USER || "info@fontfreda.net",
    to: "info@fontfreda.net",
    subject: `Nueva solicitud de reserva - ${data.nombreMascota}`,
    html: htmlContent,
    replyTo: data.email,
  });

  // Confirmation email to client
  const confirmationHtml = `
    <h2>Hemos recibido tu solicitud de reserva</h2>
    <p>Hola ${data.nombre},</p>
    <p>Gracias por confiar en Fontfreda. Hemos recibido tu solicitud de reserva y nos pondremos en contacto contigo pronto para confirmar disponibilidad y detalles.</p>
    <p><strong>Resumen de tu solicitud:</strong></p>
    <p><strong>Mascota:</strong> ${data.nombreMascota} (${data.tipoMascota})</p>
    <p><strong>Servicio:</strong> ${data.servicio}</p>
    <p><strong>Fechas:</strong> ${data.fechaEntrada} a ${data.fechaSalida}</p>
    <p>Un saludo,<br>Equipo Fontfreda</p>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_USER || "info@fontfreda.net",
    to: data.email,
    subject: "Solicitud de reserva recibida - Fontfreda",
    html: confirmationHtml,
  });
}
