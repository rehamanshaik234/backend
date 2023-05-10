const mongoDb= require('mongoose');

const noteSchema=mongoDb.Schema({
    id:{
        type: String,
        unique:true,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    }
});
module.exports= mongoDb.model('notes',noteSchema);