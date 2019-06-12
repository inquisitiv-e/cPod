const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create a GET route
const list = ["item1", "item2", "item3"];

app.get('/express_backend', (req, res) => {
    res.send({express: list});
});

app.post('/questions', (req, res) => {
    const username = req.body;
    list.push(username);
    console.log(list);
    res.send({response: list});
});