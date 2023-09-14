import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import { Home } from './views/Home/home.js';
import { Contacto } from './views/Contacto/contacto.js';
import { Uteco } from './views/Uteco/uteco.js';
import { QuienesSomos } from './views/Quienes-somos/quienesSomos.js';
import { Urucup } from './views/Urucup/urucup.js';
import { Eventos } from './views/Eventos/eventos.js';
import { Navbar } from './components/Navbar/navbar.js';
import { Footer } from './components/Footer/footer.js';



function App () {
  return (
    <>
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/views/Urucup/urucup.js" element = {<Urucup />} />
        <Route path="/src/views/Eventos/eventos.js" element = {<Eventos />} />
        <Route path="/src/views/Quienes-somos/quienesSomos.js" element ={<QuienesSomos />} />
        <Route path= "/src/views/Contacto/contacto.js" element={<Contacto />} />
        <Route path= "/src/views/Uteco/uteco.js" element={<Uteco />} />
        </Routes>
      <Footer />
    
    </>

  );
}

export default App;
