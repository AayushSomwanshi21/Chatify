const fetchuser = require('../middleware/fetchuser');
const Message = require('../models/Message')
const express = require('express');
const router = express.Router();

// Get a specific chat using GET on 'http://localhost:5000/api/messaging/getchat/:id'
router.get('/getchat/:id', fetchuser, async (req, res) => {

    try {
        const allmsgs = await Message.find({
            $or: [
                { senderId: req.user.id, receiverId: req.params.id },
                { senderId: req.params.id, receiverId: req.user.id }
            ]
        }).sort({ sentAt: 1 });
        return res.status(201).json({ allmsgs });
    } catch (error) {
        return res.status(400).json({ error: "Something went wrong" });
    }

});

// send chat using POST on 'http://localhost:5000/api/messaging/sendchat/:id'
router.post('/sendchat/:id', fetchuser, async (req, res) => {

    const receiverId = req.params.id;
    console.log(req.params.id)
    // senderId can be extracted from req.user.id
    const senderId = req.user.id;
    const { content } = req.body;
    //console.log(`senderId:${senderId}\nreceiverId:${receiverId}\ncontent:${content}`)
    //console.log(req.body)
    if (!senderId || !receiverId || !content) {
        return res.status(400).json({ error: "Something went wrong in credentials" });
    }
    try {
        const newmsg = await Message.create({ senderId, receiverId, content });
        await newmsg.save();
        return res.status(201).json({ message: 'Message sent successfully', newmsg });

    } catch (error) {
        return res.status(400).json({ error: "Something went wrong" });
    }
});

module.exports = router;