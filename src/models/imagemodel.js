const mongoDb= require('mongoose');
// const file = require('../multer/file');
const ImageModel= mongoDb.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image:{
            data:Buffer,
            contentType:String
                }  
    }
)
module.exports=mongoDb.model('image',ImageModel);