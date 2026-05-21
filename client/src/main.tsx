import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initWebVitalsMonitoring } from "./lib/webVitals";

// Inicializar monitoreo de Web Vitals para GA4
if (typeof window !== "undefined") {
  initWebVitalsMonitoring();
}

createRoot(document.getElementById("root")!).render(<App />);
