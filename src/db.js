const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://srehaman234:Rehaman123@cluster0.hs6uo8e.mongodb.net/?retryWrites=true&w=majority").then(function(){
            console.log("Connected To Mongo")    
        }); 
    } catch (error) {
        console.log("Error Occured")
    }
}

module.exports = connectToMongo;