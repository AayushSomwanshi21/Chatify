import React, { useEffect, useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import MsgContext from "../context/MsgContext";
import Chat from "./Chat";

const Home = (props) => {

    const context = useContext(MsgContext);
    const { msgs, getallmsg } = context;

    useEffect(() => {
        getallmsg();
    }, []);

    return (
        <div style={{ marginLeft: '100px' }}>
            <Card style={{ width: '30rem', height: '100vh', overflow: 'hidden' }} bg="dark">
                <Card.Header style={{ display: "flex", height: '4rem', fontSize: "1.5rem", textAlign: "center", color: "white", justifyContent: "center", alignItems: "center" }}>CHATS</Card.Header>
                <div >
                    {msgs.map((msg, index) => (
                        <Chat key={index} msg={msg} />
                    ))}
                </div>
            </Card>
        </div>
    );
}

export default Home