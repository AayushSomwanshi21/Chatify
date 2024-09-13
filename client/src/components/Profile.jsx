import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profileImage from './Screenshot(22).png';
import { useEffect, useState } from 'react';
const Profile = () => {

    const [username, setUsername] = useState("");
    const [clicked, setClicked] = useState(false);

    useEffect(() => {

        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await fetch('http://localhost:5000/api/auth/getuser', {
                        method: 'GET',
                        headers: {
                            'auth-token': token,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error("Failed to fetch user data");
                    }

                    const data = await response.json();
                    //console.log(data)
                    if (data) {
                        setUsername(data.name);
                    } else {
                        console.error("Username not found in response");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }
        };

        fetchUserData();
    }, [])

    const iconClick = () => {
        let currentClick = clicked == true ? false : true
        setClicked(currentClick)
    }
    const updateUsername = () => {

    }

    return (
        <div style={{ marginLeft: '100px' }}>
            <Card style={{ width: '30rem', height: '100vh', overflow: 'hidden' }} bg="dark">
                <Card.Header style={{ display: "flex", height: '4rem', fontSize: "1.5rem", textAlign: "center", color: "white", justifyContent: "center", alignItems: "center", border: 'none', marginBottom: '1.5rem' }}>PROFILE</Card.Header>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'inherit' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', width: '250px', height: '250px', margin: '0', overflow: 'hidden', borderRadius: '50%' }}>
                        <img src={profileImage} alt="profileimg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ width: 'inherit' }}>
                        <Form className='mx-5'>
                            <Form.Group className="mb-3">
                                <Form.Label style={{ color: '#45e64d', fontSize: '1.2rem' }}>Username</Form.Label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Form.Control style={{ width: '20rem', fontSize: '1.25rem' }} type="text" value={username} disabled={!clicked} />
                                    <i class="fa-solid fa-pen-to-square fa-xl" style={{ color: "white" }} onClick={iconClick} ></i>
                                </div>
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