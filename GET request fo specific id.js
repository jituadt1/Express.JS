const express = require('express');

const app = express();


app.get('/', (req,res) => {

    res.send('Express GET specific request module!');
})

app.get('/api/customers/:id', (req,res) => {

    res.send(req.params.id);
})
 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}.....`))