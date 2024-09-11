import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profileImage from './Screenshot(22).png';
const Profile = () => {


    return (
        <div style={{ marginLeft: '100px' }}>
            <Card style={{ width: '30rem', height: '100vh', overflow: 'hidden' }} bg="dark">
                <Card.Header style={{ display: "flex", height: '4rem', fontSize: "1.5rem", textAlign: "center", color: "white", justifyContent: "center", alignItems: "center" }}>PROFILE</Card.Header>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'inherit' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', width: '250px', height: '250px', margin: '0', overflow: 'hidden', borderRadius: '50%' }}>
                        <img src={profileImage} alt="profileimg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ width: 'inherit' }}>
                        <Form className='mx-5'>
                            <Form.Group className="mb-2">
                                <Form.Label style={{ color: '#45e64d', fontSize: '1.2rem' }}>Username</Form.Label>
                                <Form.Control style={{ width: '20rem' }} type="text" disabled />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control style={{ width: '20rem' }} type="password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>

                </div>
            </Card>
        </div>
    )

}

export default Profile