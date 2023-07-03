const {Student} = require('../models/student')
const express = require('express');
const router = express.Router();


// router.get('/', (req, res) =>{
//     res.send('Hello World!gggggggg4');
// })


router.get('/', async (req, res) =>{
    const studentList = await Student.find();

    if(!studentList){
      res.status(500).json({success: false})
    }
    res.status(200).send(studentList)
})


router.get('/:id',async (req, res) =>{
    const student = await Student.findById(req.params.id);

    if(!student){
        res.status(500).json({message: 'The category with the given ID was not found.'})
    }
    res.status(200).send(student)
})

router.post('/', async (req,res)=>{
    let stu = new Student({
        name: req.body.name,
        class: req.body.class,
        email: req.body.email,
        phone: req.body.phone,
        marks: req.body.marks
    })
    stu = await stu.save();
    if(!stu)
    return res.status(400).send('the student cannot be created!')

    res.send(stu);
})



router.put('/:id',async (req, res)=> {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            class: req.body.class,
            email: req.body.email,
            phone: req.body.phone,
            marks: req.body.marks
        },
        { new: true}
    )

    if(!student)
    return res.status(400).send('the student cannot be created!')

    res.send(student);
})

router.delete('/:id', (req, res)=>{
    Student.findByIdAndRemove(req.params.id).then(data =>{
        if(data) {
            return res.status(200).json({success: true, message: 'the student is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "student not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

module.exports = router;
