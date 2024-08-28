import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import MsgContext from '../context/MsgContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ChatItem = (props) => {

    // Get the user id using params
    const { id } = useParams();
    const { msgs, specificChat, allmsgs, sendmsg } = useContext(MsgContext);
    const msg = msgs.find(m => m._id === id);
    const [inputMsg, setMsg] = useState("");

    useEffect(() => {
        specificChat(id);
    }, [id]);

    useEffect(() => {
    }, [allmsgs]);

    const onChange = (e) => {
        setMsg(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault();
        sendmsg(inputMsg, id);
        setMsg("");
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', margin: '0px', padding: '0px', backgroundColor: '#393e46' }} >
            <Card className="card" bg="dark" style={{ margin: '0px', padding: '0px' }}>
                <div style={{ display: "flex", height: '3.94rem', fontSize: "1.5rem", color: "white", marginLeft: '1rem', alignItems: 'center' }}>{msg.name}</div>
            </Card>

            <div style={{ flexGrow: 1, overflowY: "auto", display: "flex", flexDirection: 'column', padding: '1.5rem', color: 'white' }}>
                {allmsgs.map((msg, index) => (
                    <div key={index} style={{
                        alignSelf: msg.senderId === id ? "flex-start" : "flex-end",
                        backgroundColor: msg.senderId === id ? "black" : "green",
                        padding: '0.5rem',
                        minWidth: '100px',
                        borderRadius: '10px',
                        marginBottom: '1rem'
                    }}>
                        <strong>{msg.content}</strong>
                        <div style={{
                            display: 'flex',
                            fontSize: '0.8rem'
                        }}>{`${new Date(msg.sentAt).getHours()}:${new Date(msg.sentAt).getMinutes()}`}</div>
                    </div>
                ))}
            </div>
            <div style={{ padding: '1rem', backgroundColor: '#393e46' }}>
                <Form onSubmit={sendMessage}>
                    <Row className="align-items-center">
                        <Col xs={10}>
                            <Form.Control
                                type="text" name="inputMsg" id='inputMsg' onChange={onChange} value={inputMsg}
                            />
                        </Col>
                        <Col xs={2}>
                            <Button type="submit" >
                                <i class="fa-solid fa-paper-plane"></i>
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}


export default ChatItem;