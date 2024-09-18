import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="title">Mecha Discord</div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;