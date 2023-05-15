const express = require('express')
const router = express.Router()
const book = require('../model/book')
const monk = require('monk')
var db = monk('127.0.0.1:27017/FSD')
router.post('/postdata', async(req,res)=>{
    let books;
    try{
        books = new book({
            frm:req.body.send.frm,
            id1:req.body.send.id1,
            clg:req.body.send.clg,
            dro:req.body.send.dro,
            cop:req.body.send.cop,
            rem:req.body.send.rem,
        })
        await books.save()
    }catch (err){
        console.log(err)
    }
    if(!books){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({books})
})

const dbo=db.get('books')

router.get('/',function(req, res, next){
    res.render('index', {title:'Express'});
});

router.get('/getData', function(req, res){
 dbo.find({}, function (err, docs){
    {
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    }
 })
})




module.exports= router;