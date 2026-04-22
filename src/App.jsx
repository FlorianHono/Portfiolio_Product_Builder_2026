import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import Stack from './pages/Stack';
import Methode from './pages/Methode';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import Services from './pages/Services';
import MentionsLegales from './pages/MentionsLegales';



function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
