const express= require('express');
const app= express();
const mongoDb= require('mongoose');
const noteModel=require('./models/Note');
const bodyParser= require('body-parser');

//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoDb.connect("mongodb+srv://srehaman234:Rehaman123@cluster0.hs6uo8e.mongodb.net/?retryWrites=true&w=majority").then(function(){
    app.get("/",async function (req, res){
        const response={
            'message':'API is Working'
        }
        res.send(response);
    }); 


    const routerPath= require('./routes/Noteroutes');
    app.use('/notes',routerPath);
    
});

const PORT= process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log('Server started at '+`${PORT}`);
});
