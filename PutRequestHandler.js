const Joi = require('joi');

const express = require('express');

const app = express();

app.use(express.json());


const customers = [

    { id: 1, name: 'John'},
    { id: 2, name: 'Jay'},
    { id: 3, name: 'Poonam'}
]

app.put('/api/customers/:id', (req, res) => {

    const cust = customers.find(c => c.id === parseInt(req.params.id));
    if(!cust) res.status(404).send('Customer does not exist!');
    

    const { error } = validateCust(req.body);

    if(error) { 
        res.status(400).send(error.details[0].message)
        return;
    }

    cust.name = req.body.name;
    res.send(cust);
    

});

app.get('/api/customers', (req, res) => {

    res.send(customers);
})

function validateCust(cust){
 
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(cust, schema);

};

 
app.listen(3000, () => console.log('Listening on port 3000......'));