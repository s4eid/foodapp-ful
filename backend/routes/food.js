const express=require('express');
const { model } = require('mongoose');
const router=require("express").Router();
const Food=require('../models/food.model')

router.route('/').get((req,res)=>{
 Food.find()
 .then((foods)=>res.json(foods))
 .catch((err)=>res.status(4000).json(err))
})

router.route('/add').post((req,res)=>{
 const food=req.body.food;
 const type=req.body.type;
 const sus=req.body.sus;
 const extera=req.body.extera;

 const newFood=new Food({
     food,
     type,
     sus,
     extera,
 });
 newFood.save()
 .then(()=>res.json('your order has been added'))
 .catch((err)=>res.json(err));
})

router.route('/:id').get((req,res)=>{
Food.findById(req.params.id)
.then((food)=>res.json(food))
.catch((err)=>res.json(err))
});

router.route('/:id').delete((req,res)=>{
Food.findByIdAndDelete(req.params.id)
.then(()=>res.json('order deleted'))
.catch((err)=>res.json(err))
});

router.route('/update/:id').post((req,res)=>{
    Food.findById(req.params.id)
    .then((food)=>{
        food.food=req.body.food,
        food.type=req.body.type,
        food.sus=req.body.sus,
        food.extera=req.body.extera
        food.save()
        .then(()=>res.json('order updated'))
        .catch((err)=>res.json(err))
    })
    
    .catch((err)=>res.json(err))
})


module.exports=router;