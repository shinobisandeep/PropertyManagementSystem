const express= require('express');
var router= express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

const Property = require('../models/Property');

router.get('/',(req,res)=>{
  const propQuery=Property.find();
  let fetchProperty;
  propQuery.then(documents=>{


   res.status(200).json({
    documents:documents
   });
  })
  .catch((error)=>{
    res.status(500).json({
     message:"Couldn't fetch the Property "
    })});

});

router.get('/:id',(res,req)=>{
  Property.findById(req.params.id).then(property=>{
    if(property){
      res.status(200).json(property);
    }
    else{
      res.status(404).json({message:'property not Found'});
    }
  }). catch(error=>{
    res.status(500).json({
      message:"Couldn't fetch the property by ID "
     });

  })
})

router.post('/',(req,res)=>{

  const prop= new Property({
    _id:req.body._id,
    propertyName: req.body.propertyName,
    propertyDescription:req.body.propertyDescription,
    propertySize:req.body.propertySize,
  });

  prop.save().then(addedProperty=>{

    res.status(201).json({
      message: 'Property added successfully',
      prop:{
        ...addedProperty,
        id: addedProperty._id,

        }
    })
  })
  .catch(error =>{
    res.status(500).json({
      message:"Adding a Property failed",
      err:error,
      _id:req.body._id,
      propertyName: req.body.propertyName,
      propertyDescription:req.body.propertyDescription,
      propertySize:req.body.propertySize

    });
  })
});

router.delete('/:id',(req,res)=>{
  console.log(req.params.id);
  Property.deleteOne({_id: req.params.id}).then(result =>{

    if(result.deletedCount > 0){
      res.status(200).json({ message: "post deleted!"});
    }})
    .catch(error=>{
      res.status(500).json({
        message:"Couldn't delete the Property "
       });
      });
});

module.exports=router;
