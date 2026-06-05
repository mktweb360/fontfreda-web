import axios from "axios";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
  await axios.post(BREVO_API_URL, {
    sender: { name: "Fontfreda", email: "info@fontfreda.net" },
    to: [{ email: to }],
    subject,
    htmlContent: html,
    ...(replyTo && { replyTo: { email: replyTo } })
  }, {
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json"
    }
  });
}

export async function sendContactEmail(data: any) {
  await sendEmail(
    "info@fontfreda.net",
    `Nueva consulta: ${data.asunto}`,
    `<h2>Nueva consulta de contacto</h2>
    <p><strong>Nombre:</strong> ${data.nombre}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Teléfono:</strong> ${data.telefono}</p>
    <p><strong>Asunto:</strong> ${data.asunto}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${data.mensaje.replace(/\n/g, "<br>")}</p>`,
    data.email
  );
  await sendEmail(
    data.email,
    "Hemos recibido tu consulta - Fontfreda",
    `<h2>Hemos recibido tu consulta</h2>
    <p>Hola ${data.nombre},</p>
    <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
    <p><strong>Asunto:</strong> ${data.asunto}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${data.mensaje.replace(/\n/g, "<br>")}</p>
    <p>Un saludo,<br>Equipo Fontfreda</p>`
  );
}

export async function sendReservaEmail(data: any) {
  await sendEmail(
    "info@fontfreda.net",
    `Nueva solicitud de reserva - ${data.nombreMascota}`,
    `<h2>Nueva solicitud de reserva</h2>
    <p><strong>Nombre:</strong> ${data.nombre}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Teléfono:</strong> ${data.telefono}</p>
    <p><strong>Servicio:</strong> ${data.servicio}</p>
    <p><strong>Fecha entrada:</strong> ${data.fechaEntrada}</p>
    <p><strong>Fecha salida:</strong> ${data.fechaSalida}</p>
    <p><strong>Mascota:</strong> ${data.nombreMascota} (${data.tipoMascota})</p>
    ${data.raza ? `<p><strong>Raza:</strong> ${data.raza}</p>` : ""}
    ${data.edad ? `<p><strong>Edad:</strong> ${data.edad}</p>` : ""}
    ${data.requisitosEspeciales ? `<p><strong>Requisitos:</strong> ${data.requisitosEspeciales}</p>` : ""}`,
    data.email
  );
  await sendEmail(
    data.email,
    "Solicitud de reserva recibida - Fontfreda",
    `<h2>Hemos recibido tu solicitud de reserva</h2>
    <p>Hola ${data.nombre},</p>
    <p>Gracias por confiar en Fontfreda. Confirmaremos disponibilidad pronto.</p>
    <p><strong>Mascota:</strong> ${data.nombreMascota} (${data.tipoMascota})</p>
    <p><strong>Servicio:</strong> ${data.servicio}</p>
    <p><strong>Fechas:</strong> ${data.fechaEntrada} a ${data.fechaSalida}</p>
    <p>Un saludo,<br>Equipo Fontfreda</p>`
  );
}
