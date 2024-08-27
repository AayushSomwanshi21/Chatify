import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ChatItem from './ChatItem';
const Chat = (props) => {
    const { msg } = props
    const navigate = useNavigate();

    //on clicking the card it should render a new ChatItem component
    const showChatItem = () => {
        navigate(`/chats/${msg._id}`);
    }

    return (
        <div className='col-md-5'>
            <div className='card' style={{ width: '30rem' }}>
                <Card onClick={showChatItem}>
                    <Card.Body>
                        <Card.Title>{msg.name}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default Chat;