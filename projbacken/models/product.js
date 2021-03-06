const mongoose = require('mongoose');

const { ObjectId } = require('mongoose');

const productSchema = new mongoose.Schema(

    {
        name : {
            type : String,
            trim : true,
            required:true,
            maxlength:10
        },

        description :{
            type:String,
            trim:true,
            required:true,
            maxlength:200
        },

        price :{
            type:Number,
            required:true,
            maxlength:20,
            trim :false

        },

        category : {

            type:ObjectId,
            ref:"Category",
            required:true
             
        },
        
        stock : {
            type : Number
        },
        sold : {
            type: Number,
            default: 0
        },

        photo : {
            data:Buffer,
            contentType:String
        }

    },

    {timestamp:true}

);

module.exports = mongoose.model('Product',productSchema);
