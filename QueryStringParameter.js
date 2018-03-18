const express = require('express');

const app = express();

app.get('/api/posts/:year/:month', (req , res) => {

    res.send(req.query);
})


const port = process.env.PORT || 3000;

app.listen(port , () => console.log(`Listening on port ${port}.......`));