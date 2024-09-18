import './NotFound404.css'

import { useLocation } from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();

    return (
        <div>
            <h1>404 - Página Não Encontrada</h1>
            <p>A rota que você tentou acessar: <code>{location.pathname}</code> não existe.</p>
        </div>
    );
};

export default NotFound;
