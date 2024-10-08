import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function Sidebar() {

    const { logout } = useContext(AuthContext)

    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/chats" className="nav-link"><i class="fa-regular fa-message fa-lg"></i></Nav.Link>
                <Nav.Link as={Link} to="/search" className="nav-link"><i class="fa-solid fa-magnifying-glass fa-lg"></i></Nav.Link>
                <Nav.Link as={Link} to="/profile" className="nav-link"><i class="fa-regular fa-user fa-lg"></i></Nav.Link>
                <Nav.Link as={Link} to="/login" className="nav-link"><i class="fa-solid fa-right-from-bracket fa-lg" onClick={logout}></i></Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;
