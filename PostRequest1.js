const express = require('express');

const app = express();

app.use(express.json());

const customers = [
    { id: 1 , name:'john'},
    { id: 2 , name:'jay '}
]


app.get('/api/customers/:id', (req , res) => {

    const cust = customers.find(c => c.id == parseInt(req.params.id));

    if(!cust){ res.status(404).send('Customer does not exist!')}
    else {res.send(cust)};
})

app.post('/api/customers/new', (req, res) => {

    const custm = {
        id: customers.length + 1,
        name: req.body.name
    };

    customers.push(custm);
    res.send(custm);
})

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}.....!`));