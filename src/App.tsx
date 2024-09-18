import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Perfil from './pages/Perfil/Perfil';
import Header from './templates/Header/Header';
import NotFound from './pages/NotFound404/NotFound404';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/perfil" element={<Perfil />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
