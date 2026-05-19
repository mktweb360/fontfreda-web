import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
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
      <Route path="/" component={Home} />
      <Route path="/residencia-canina" component={ResidenciaCanina} />
      <Route path="/residencia-felina" component={ResidenciaFelina} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/faq" component={FAQ} />
      <Route path="/larga-estancia" component={LargaEstancia} />
      <Route path="/blog" component={Blog} />
      <Route path="/ads/larga-estancia" component={LandingLargaEstancia} />
      <Route path="/ads/residencia-canina" component={LandingResidenciaCanina} />
      <Route path="/ads/residencia-felina" component={LandingResidenciaFelina} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
