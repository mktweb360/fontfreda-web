import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import ResidenciaCanina from "./pages/ResidenciaCanina";
import ResidenciaFelina from "./pages/ResidenciaFelina";
import Contacto from "./pages/Contacto";
import FAQ from "./pages/FAQ";
import LargaEstancia from "./pages/LargaEstancia";
import Blog from "./pages/Blog";
import LandingLargaEstancia from "./pages/LandingLargaEstancia";
import LandingResidenciaCanina from "./pages/LandingResidenciaCanina";
import LandingResidenciaFelina from "./pages/LandingResidenciaFelina";

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

      {/* English routes */}
      <Route path="/en" component={Home} />
      <Route path="/en/residencia-canina" component={ResidenciaCanina} />
      <Route path="/en/residencia-felina" component={ResidenciaFelina} />
      <Route path="/en/contacto" component={Contacto} />
      <Route path="/en/faq" component={FAQ} />
      <Route path="/en/larga-estancia" component={LargaEstancia} />
      <Route path="/en/blog" component={Blog} />

      {/* Google Ads Landing Pages */}
      <Route path="/ads/larga-estancia" component={LandingLargaEstancia} />
      <Route path="/ads/residencia-canina" component={LandingResidenciaCanina} />
      <Route path="/ads/residencia-felina" component={LandingResidenciaFelina} />
      <Route path="/en/ads/larga-estancia" component={LandingLargaEstancia} />
      <Route path="/en/ads/residencia-canina" component={LandingResidenciaCanina} />
      <Route path="/en/ads/residencia-felina" component={LandingResidenciaFelina} />

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
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
