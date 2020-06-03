require('./config/config');
const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/usuario', (req, res) => {

    const body = req.body;

    if (body.name === undefined)
    {
        res.status(400).json({
            ok: false,
            message: 'Name is required'
        });
    }
    else
    {
        res.json({
            body
        });
    }

})

app.listen(process.env.PORT, () => {
    console.log('Listening on http://localhost:' + process.env.PORT);
})