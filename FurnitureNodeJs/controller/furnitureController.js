const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Furniture} = require('../models/furniture.js');


// localhost : 3000/furniture
router.get('/',(req,res)=>{
    Furniture.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Furniture : '+JSON.stringify(err,undefined,2));}

    });

});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Furniture.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving Furniture : '+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var furnitureemp = new Furniture({
        name : req.body.name,
        price : req.body.price,
        discount: req.body.discount,
        color : req.body.color,
        avalibleCount :req.body.avalibleCount,
        description : req.body.description,
    });
    furnitureemp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Furniture saving Data : '+JSON.stringify(err,undefined,2));}

    });
});


router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    var furnitureemp = new Furniture({
        name : req.body.name,
        price : req.body.price,
        discount: req.body.discount,
        color : req.body.color,
        avalibleCount :req.body.avalibleCount,
        description : req.body.description,
    });
    Furniture.findByIdAndUpdate(res.params.id,{$set:furnitureemp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Update Furniture : '+JSON.stringify(err,undefined,2));}
    });

});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Furniture.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Furniture : '+JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;