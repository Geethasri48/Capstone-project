const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    frm:{
        type:String,
        require:true
    },
    id1:{
        type:String,
        require:true
    },
    clg:{
        type:String,
        require:true
    },
    dro:{
        type:Number,
        require:true
    },
    cop:{
        type:Number,
        require:true
    },
    rem:{
        type:String,
        require:true
    },
    sub:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('books', bookSchema)