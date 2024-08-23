const connectDB = require('./db');
const express = require('express');
const cors = require('cors')
connectDB();
const app = express();
const port = 5000
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => res.send("Hello World"));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/messaging', require('./routes/messaging'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})