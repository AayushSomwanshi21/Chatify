import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useContext, useState } from 'react';
import Chat from './Chat';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
    const [username, setUsername] = useState("");
    const [results, setResults] = useState([]);
    const { getsearch } = useContext(AuthContext)
    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const search_results = await getsearch(username);
            setResults(search_results) // Await the search function

        } catch (error) {
            console.error("Error during search:", error);
        }
    };
    return (
        <div style={{ marginLeft: '100px' }}>
            <Card style={{ width: '30rem', height: '100vh', overflow: 'hidden' }} bg="dark">
                <Card.Header style={{ display: "flex", height: '4rem', fontSize: "1.5rem", textAlign: "center", color: "white", justifyContent: "center", alignItems: "center" }}>SEARCH</Card.Header>
                <div>
                    <Form className='m-3' onSubmit={handleSubmit}>
                        <Row className="align-items-center justify-content-center g-2">
                            <Col sm={10} >

                                <Form.Control id="inlineFormInputName" placeholder="search user" onChange={handleInputChange} />
                            </Col>
                            <Col xs="auto" >
                                <Button type="submit"><i class="fa-solid fa-magnifying-glass fa-s"></i></Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div >
                    {
                        //build a different component for Chat with a add as a chat option
                    }
                    {results.map((user, index) => (
                        <Chat key={index} msg={user} />
                    ))}
                </div>
            </Card>

        </div>
    );
}

export default Search;