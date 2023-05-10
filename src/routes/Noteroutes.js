const express= require('express');
const router=express.Router();
const Note= require('../models/Note');
const res = require('express/lib/response');

//get api
router.get('/list',async function(req,res){
    const response= await Note.find();
    res.send(response);
});
//get specific data
router.post('/specificnote',async function(req,res){
    const response= await Note.find({userid: req.body.userid});
    res.send(response);
})

//add data

router.post('/add',async function(req,res){

    await Note.deleteOne({id: req.body.id});

    var newNote= new Note({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        content:req.body.content
    });

    await newNote.save();

    const response = {
        'message': "New note Created with id "
    }
    res.send(response);
})

//delete note
router.post('/delete', async function(req,res){
    await Note.deleteOne({id: req.body.id});
    
    const response = {
        'message': "Note Deleted Successfully "
    }
    res.send(response);
})

module.exports=router;
