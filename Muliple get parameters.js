const express = require('express');

const app = express();


app.get('/', (req,res) => {

    res.send('Express GET specific request module!');
})

app.get('/api/posts/:year/:month', (req,res) => {

    res.send(req.params);
})
 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}.....`))