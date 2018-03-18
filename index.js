const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Express Simple GET Request Example!');
});

app.get('/api/customers' , (req, res) => {

    res.send([1,2,3]);
});

const port = process.env.PORT || 3000; 

app.listen(port , () => console.log(`Listening on port ${port}....`));