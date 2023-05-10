const express= require('express');
const app= express();
const noteModel=require('./models/Note');
const bodyParser= require('body-parser');
const connectToMongo = require("./db");
const routerPath= require('./routes/Noteroutes');


//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


const PORT= process.env.PORT || 8080;

connectToMongo().then(() => {
    try {
        app.listen(PORT, function(){
            console.log('Server started at '+`${PORT}`);
        }); 
    } catch (error) {
        console.log("Error occured while starting server", error);
    }
})
app.use('/notes',routerPath);
app.get("/",async function (req, res){
    const response={
        'message':'API is Working'
    }
    res.send(response);
}); 


