const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('hello NodeJs');
})

const server = require("http").createServer({}, app);

app.listen(3000, () => console.log('Starting server in 3000'));