import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactEmail, sendReservaEmail, type ContactFormData, type ReservaFormData } from "./email";
import newsletterRouter from "./routers/newsletter-express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Newsletter routes
  app.use("/api/newsletter", newsletterRouter);

  // API endpoints for form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const data: ContactFormData = req.body;

      // Validate required fields
      if (!data.nombre || !data.email || !data.telefono || !data.asunto || !data.mensaje) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Send emails
      await sendContactEmail(data);

      res.json({ success: true, message: "Consulta enviada correctamente" });
    } catch (error) {
      console.error("Error sending contact email:", error);
      res.status(500).json({ error: "Error al enviar la consulta" });
    }
  });

  app.post("/api/reserva", async (req, res) => {
    try {
      const data: ReservaFormData = req.body;

      // Validate required fields
      if (
        !data.nombre ||
        !data.email ||
        !data.telefono ||
        !data.servicio ||
        !data.fechaEntrada ||
        !data.fechaSalida ||
        !data.nombreMascota ||
        !data.tipoMascota
      ) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Send emails
      await sendReservaEmail(data);

      res.json({ success: true, message: "Solicitud de reserva enviada correctamente" });
    } catch (error) {
      console.error("Error sending reserva email:", error);
      res.status(500).json({ error: "Error al enviar la solicitud de reserva" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
