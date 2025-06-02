
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Index from './pages/Index';
import Partnership from './pages/Partnership';
import Mitspieler from './pages/Mitspieler';
import About from './pages/About';
import Services from './pages/Services';
import Bewerbung from './pages/Bewerbung';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/mitspieler" element={<Mitspieler />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bewerbung" element={<Bewerbung />} />
              <Route path="/imprint" element={<Imprint />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <Toaster />
        </Router>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
