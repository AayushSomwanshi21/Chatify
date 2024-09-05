import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import '../Login.css';
import { AuthContext } from '../context/AuthContext';

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const { login } = useContext(AuthContext);

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        //console.log(json.success, json.authtoken);
        if (json.success) {
            // redirect to Homepage
            login(json.authtoken)
            console.log(json.authtoken)
            navigate("/chats")
            //props.showAlert("Successful", "success");
            alert('login successfull')
        }
        else {
            // props.showAlert("Invalid Credentials", "danger");
            alert('No login')
        }
    }
    return (

        <Container className="d-flex justify-content-center mt-5 align-items-center">
            <Row className="justify-content-center w-100 ">
                <Col xs={10} sm={8} md={6} lg={5} className="login-container ">
                    <h3 className="text-center mb-4">Login</h3>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" id='email' placeholder="Enter email" onChange={onChange} value={credentials.email} />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' id='password' placeholder="Password" onChange={onChange} value={credentials.password} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100 mt-4'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>


    );
}

export default Login;