import { useState } from "react";
import MsgContext from "./MsgContext";

const MsgState = (props) => {

    const msgsInitial = []
    // all messages
    const [msgs, setMsgs] = useState(msgsInitial);

    // user specific messages
    const [allmsgs, setAllmsgs] = useState(msgsInitial);

    const getallmsg = async () => {

        const response = await fetch('http://localhost:5000/api/messaging/allchat', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json();
        //console.log(json);
        setMsgs(json.allusers);
    }

    const specificChat = async (id) => {
        const response = await fetch(`http://localhost:5000/api/messaging/getchat/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setAllmsgs(json.allmsgs);
    }

    const sendmsg = async (content, id) => {
        const response = await fetch(`http://localhost:5000/api/messaging/sendchat/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ content })
        });
        const new_msg = await response.json();
        // the message content with ids is in newmsg
        setAllmsgs(prev => [...prev, new_msg.newmsg]);
    }

    return (
        <MsgContext.Provider value={{ msgs, getallmsg, specificChat, allmsgs, sendmsg }}>
            {props.children}
        </MsgContext.Provider>

    )
}

export default MsgState;