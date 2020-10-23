const express = require('express');
var customerrouter = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Customer} = require('../models/customer.js');


//localjost : 3000/staff
customerrouter.get('/',(req,res)=>{
    Customer.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Customer : '+JSON.stringify(err,undefined,2));}

    });

});

customerrouter.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Customer.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving Customer : '+JSON.stringify(err,undefined,2));}
    });
});

customerrouter.post('/',(req,res)=>{
    var customeremp = new Customer({
        name : req.body.name,
        orderName : req.body.orderName,
        distric: req.body.distric,
        phoneNumber : req.body.phoneNumber,
        address :req.body.address,
        totalPrice : req.body.totalPrice,
    });
    customeremp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Customer saving Data : '+JSON.stringify(err,undefined,2));}

    });
});

customerrouter.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    var customeremp= new Furniture({
        name : req.body.name,
        orderName : req.body.orderName,
        distric: req.body.distric,
        phoneNumber : req.body.phoneNumber,
        address :req.body.address,
        totalPrice : req.body.totalPrice,
    });
    Customer.findByIdAndUpdate(res.params.id,{$set:customeremp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Update Customer : '+JSON.stringify(err,undefined,2));}
    });

});

customerrouter.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Customer.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Customer : '+JSON.stringify(err,undefined,2));}
    });
});

module.exports = customerrouter;