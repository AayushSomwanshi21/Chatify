import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/chats" className="nav-link"><i class="fa-regular fa-message fa-lg"></i></Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav-link"><i class="fa-solid fa-gear fa-lg"></i></Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-link"><i class="fa-regular fa-user fa-lg"></i></Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;
