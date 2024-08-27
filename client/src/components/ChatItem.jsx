import { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import MsgContext from '../context/MsgContext';

const ChatItem = (props) => {

    // Get the user id using params
    const { id } = useParams();
    const { msgs, specificChat, allmsgs } = useContext(MsgContext);
    const msg = msgs.find(m => m._id === id);

    useEffect(() => {
        specificChat(id);
    }, [id]);

    return (
        <div style={{ width: '100%', height: '100vh', margin: '0px', padding: '0px', backgroundColor: '#393e46' }} >
            <Card className="card" bg="dark" style={{ margin: '0px', padding: '0px' }}>
                <div style={{ display: "flex", height: '3.94rem', fontSize: "1.5rem", color: "white", marginLeft: '1rem', alignItems: 'center' }}>{msg.name}</div>
            </Card>
            <div style={{ padding: '1rem', color: 'white' }}>
                {allmsgs.map((msg, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        {msg.content}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default ChatItem;