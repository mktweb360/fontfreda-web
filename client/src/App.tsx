import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import ResidenciaCanina from "./pages/ResidenciaCanina";
import ResidenciaFelina from "./pages/ResidenciaFelina";
import Contacto from "./pages/Contacto";
import FAQ from "./pages/FAQ";
import LargaEstancia from "./pages/LargaEstancia";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Instalaciones from "./pages/Instalaciones";
import LandingLargaEstancia from "./pages/LandingLargaEstancia";
import LandingResidenciaCanina from "./pages/LandingResidenciaCanina";
import LandingResidenciaFelina from "./pages/LandingResidenciaFelina";
import Tarifas from "./pages/Tarifas";
import Guarderia from "./pages/Guarderia";
import GuarderiaEnCasa from "./pages/GuarderiaEnCasa";
import ConfirmarNewsletter from "./pages/ConfirmarNewsletter";
import PoliticaCookies from "./pages/PoliticaCookies";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import AvisoLegal from "./pages/AvisoLegal";
import LandingAdsCanina from "./pages/LandingAdsCanina";
import LandingAdsFelina from "./pages/LandingAdsFelina";
import LandingAdsLargaEstancia from "./pages/LandingAdsLargaEstancia";
import LandingAdsGuarderia from "./pages/LandingAdsGuarderia";

function Router() {
  return (
    <Switch>
      {/* Spanish routes (default) */}
      <Route path="/" component={Home} />
      <Route path="/residencia-canina" component={ResidenciaCanina} />
      <Route path="/residencia-felina" component={ResidenciaFelina} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/faq" component={FAQ} />
      <Route path="/larga-estancia" component={LargaEstancia} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/tarifas" component={Tarifas} />
      <Route path="/guarderia" component={Guarderia} />
      <Route path="/guarderia-canina-dentro-de-casa" component={GuarderiaEnCasa} />

      {/* English routes */}
      <Route path="/en" component={Home} />
      <Route path="/en/residencia-canina" component={ResidenciaCanina} />
      <Route path="/en/residencia-felina" component={ResidenciaFelina} />
      <Route path="/en/contacto" component={Contacto} />
      <Route path="/en/faq" component={FAQ} />
      <Route path="/en/larga-estancia" component={LargaEstancia} />
      <Route path="/blog" component={Blog} />
      <Route path="/tarifas" component={Tarifas} />
      <Route path="/instalaciones" component={Instalaciones} />
      <Route path="/en/blog" component={Blog} />
      <Route path="/en/blog/:slug" component={BlogPost} />
      <Route path="/en/tarifas" component={Tarifas} />
      <Route path="/en/instalaciones" component={Instalaciones} />
      <Route path="/en/guarderia" component={Guarderia} />
      <Route path="/en/guarderia-canina-dentro-de-casa" component={GuarderiaEnCasa} />

      {/* Newsletter */}
      <Route path="/confirmar-newsletter" component={ConfirmarNewsletter} />
      <Route path="/en/confirmar-newsletter" component={ConfirmarNewsletter} />

      {/* Legal Pages */}
      <Route path="/politica-cookies" component={PoliticaCookies} />
      <Route path="/en/politica-cookies" component={PoliticaCookies} />
      <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
      <Route path="/en/politica-privacidad" component={PoliticaPrivacidad} />
      <Route path="/aviso-legal" component={AvisoLegal} />
      <Route path="/en/aviso-legal" component={AvisoLegal} />

      {/* Google Ads Landing Pages */}
      <Route path="/ads/larga-estancia" component={LandingLargaEstancia} />
      <Route path="/ads/residencia-canina" component={LandingResidenciaCanina} />
      <Route path="/ads/residencia-felina" component={LandingResidenciaFelina} />
      <Route path="/en/ads/larga-estancia" component={LandingLargaEstancia} />
      <Route path="/en/ads/residencia-canina" component={LandingResidenciaCanina} />
      <Route path="/en/ads/residencia-felina" component={LandingResidenciaFelina} />

      {/* New Ads Landing Pages (SEO-optimized URLs) */}
      <Route path="/residencia-canina-barcelona" component={LandingAdsCanina} />
      <Route path="/residencia-felina-barcelona" component={LandingAdsFelina} />
      <Route path="/larga-estancia-perros-gatos" component={LandingAdsLargaEstancia} />
      <Route path="/en/dog-boarding-barcelona" component={LandingAdsCanina} />
      <Route path="/en/cat-boarding-barcelona" component={LandingAdsFelina} />
      <Route path="/en/long-term-boarding" component={LandingAdsLargaEstancia} />
      <Route path="/guarderia-canina-barcelona" component={LandingAdsGuarderia} />
      <Route path="/en/dog-daycare-barcelona" component={LandingAdsGuarderia} />

      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
            <WhatsAppButton />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
