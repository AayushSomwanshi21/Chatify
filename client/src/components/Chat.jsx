import Card from 'react-bootstrap/Card';

const Chat = (props) => {
    const { msg } = props
    return (
        <div className='col-md-5'>
            <div className='card' style={{ width: '30rem' }}>
                <Card>
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