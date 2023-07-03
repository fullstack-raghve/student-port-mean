const {Teacher} = require('../models/teacher')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) =>{
    const tList = await Teacher.find();

    if(!tList){
      res.status(500).json({success: false})
    }
    res.status(200).send(tList)
})

router.get('/:id',async (req, res) =>{
    const teacher = await Teacher.findById(req.params.id);

    if(!teacher){
        res.status(500).json({message: 'The category with the given ID was not found.'})
    }
    res.status(200).send(teacher)
})

router.post('/', async (req,res)=>{
    let tcher = new Teacher({
        name: req.body.name,
        education: req.body.education,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject
    })
    tcher = await tcher.save();
    if(!tcher)
    return res.status(400).send('the tList cannot be created!')

    res.send(tcher);
})

module.exports = router;