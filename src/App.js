import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Layout';
import Layout from './views/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </>

  );
}

export default App;
