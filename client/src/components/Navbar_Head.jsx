import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Navbar_Head() {

    const location = useLocation();
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    return (
        <Navbar expand="lg" className="bg-dark navbar-dark rotate-90">
            <Container fluid >
                <Navbar.Brand className="rotated-content">NoteHive</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className={location.pathname === '/' ? "active" : ""}>Home</Nav.Link>
                        <Nav.Link href="/about" className={location.pathname === '/about' ? "active" : ""}>About</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#">Hello { }</Navbar.Brand>
                    {!localStorage.getItem('token') ? <Form className="d-flex">
                        <Button variant="success mx-2" href='/login'>Login</Button>
                        <Button variant="outline-success mx-2" href='signup'>Signup</Button>
                    </Form> : <Button variant="outline-success mx-2" onClick={handleLogout}>Logout</Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar_Head;