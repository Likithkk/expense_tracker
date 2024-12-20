const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

//add
router.post('/',async(req,res)=>{
    try {
        const Newexpense=await Expense(req.body);
        Newexpense.save();
        res.status(201).json(Newexpense);
    } catch (error) {
        res.status(500).json(error)
    }
})

//all expense
router.get('/',async(req,res)=>{
    try {
        const expense=await Expense.find().sort({createdAt:-1});
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json(error);
    }
})

//edit 
router.put('/:id',async(req,res)=>{
    try {
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        )
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json(error);
    }
})

//delete
router.delete('/:id',async(req,res)=>{
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id)
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports=router;