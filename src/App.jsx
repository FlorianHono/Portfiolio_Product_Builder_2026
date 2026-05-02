import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';

const Accueil = lazy(() => import('./pages/Accueil'));
const Projets = lazy(() => import('./pages/Projets'));
const Stack = lazy(() => import('./pages/Stack'));
const Methode = lazy(() => import('./pages/Methode'));
const APropos = lazy(() => import('./pages/APropos'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-surface text-primary font-space">...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Accueil />} />
              <Route path="services" element={<Services />} />
              <Route path="projets" element={<Projets />} />
              <Route path="stack" element={<Stack />} />
              <Route path="methode" element={<Methode />} />
              <Route path="a-propos" element={<APropos />} />
              <Route path="contact" element={<Contact />} />
              <Route path="mentions-legales" element={<MentionsLegales />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
