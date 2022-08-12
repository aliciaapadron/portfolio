import '../styles/App.scss';
//rutas
import { Routes, Route } from 'react-router-dom';

//useState y useEffect

//componentes
import { Home } from './pages/Home';
import { Proyects } from './pages/Proyects';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
