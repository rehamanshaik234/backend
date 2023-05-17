const express= require('express');
const router=express.Router();
const Note= require('../models/Note');
const ImageModel= require('../models/imagemodel');
const multer= require('multer');
const e = require('express');
const userModel= require('../models/user');
const user = require('../models/user');
//storage
const Storage= multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
}
) 
const upload= multer({
    storage:Storage,
}).single('testImage');
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
//get Images
router.get('/images/list', async function(req,res){
    const response= await ImageModel.find();
    res.send(response);
})

//add images
router.post('/images/add', async function(req,res){
    upload(req,res, async (err)=>{
        if(err){
            console.log(err);
        }else{
            const newImagemodel=new ImageModel({
                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            });
            await newImagemodel.save().then(()=>{
                res.json(
                    {'message':'uploaded sucessfully'}
                );
            });

        }
    })
})
//users
router.get('/usersList',async function(req, res){
    const response= await userModel.find();
    res.send(response);
});

//add users
router.post('/addusers',async function(req,res){
    await userModel.deleteOne({UserId: req.body.UserId});

    const newUser= new userModel({
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Userpassword: req.body.Userpassword
    });
    await newUser.save();

    res.json({
        'message':'New User Added'
    })
})
module.exports=router;
