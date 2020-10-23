const express = require('express');
var staffrouter = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Staff} = require('../models/staff.js');


// localhost : 3000/staff
staffrouter.get('/',(req,res)=>{
    Staff.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Staff : '+JSON.stringify(err,undefined,2));}

    });

});

staffrouter.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Staff.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving Staff : '+JSON.stringify(err,undefined,2));}
    });
});

staffrouter.post('/',(req,res)=>{
    var staffemp = new Staff({
        name : req.body.name,
        status : req.body.status,
        age: req.body.age,
        workArea : req.body.workArea,
        address :req.body.address,
        joinDate : req.body.joinDate,
    });
    staffemp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Staff saving Data : '+JSON.stringify(err,undefined,2));}

    });
});

staffrouter.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    var staffemp = new Furniture({
        name : req.body.name,
        status : req.body.status,
        age: req.body.age,
        workArea : req.body.workArea,
        address :req.body.address,
        joinDate : req.body.joinDate,
    });
    Staff.findByIdAndUpdate(res.params.id,{$set:staffemp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Update Staff : '+JSON.stringify(err,undefined,2));}
    });

});

staffrouter.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Staff.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Staff : '+JSON.stringify(err,undefined,2));}
    });
});

module.exports = staffrouter;