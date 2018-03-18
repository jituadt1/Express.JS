const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

const customers = [
    { id: 1 , name:'john'},
    { id: 2 , name:'jay '}
]



app.post('/api/customers/new', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    }


    const result = Joi.validate(req.body, schema);
    

    if(result.error){
        res.status(400).send(result.error.details[0].message)
    }
    
    const custm = {
        id: customers.length + 1,
        name: req.body.name
    };

    customers.push(custm);
    res.send(custm);
})



app.get('/api/customers/:id', (req , res) => {

    const cust = customers.find(c => c.id == parseInt(req.params.id));

    if(!cust){ res.status(404).send('Customer does not exist!')}
    else {res.send(cust)};
})


const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}.....!`));