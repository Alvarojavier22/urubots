import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home/home';
import { Contacto } from './views/Contacto/contacto';
import { Uteco } from './views/Uteco/uteco';
import { QuienesSomos } from './views/Quienes-somos/quienesSomos';
import { Urucup } from './views/Urucup/urucup';
import { Eventos } from './views/Eventos/eventos';
import { Navbar } from './components/Navbar/navbar';



function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Urucup />} />
        <Route index element={<Eventos />} />
        <Route index element={<QuienesSomos />} />
        <Route index element={<Contacto />} />
        <Route index element={<Uteco />} />
      </Routes>
    </>

  );
}

export default App;
