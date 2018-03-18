const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

const employees = [
    { id: 1, name:'employee1'},
    { id: 2, name:'employee2'},
    { id: 3, name:'employee3'}
]

app.get('/api/customers', (req, res) => {

    res.send(employees);
})

app.delete('/api/customers/:id', (req, res) => {

    const emp  = employees.find(e => e.id === parseInt(req.params.id)); //we check if this id of employee is exit or not
    if(!emp) return res.status(404).send('Employee does not exist!'); //if not then give 404 not found error.

    const index = employees.indexOf(emp); //we find the index of this employee
    employees.splice(index, 1); //we delete this record now


    res.send(emp);

});

app.listen(3000, () => console.log('Listening on port 3000.....'));