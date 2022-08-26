const mongoose = require('mongoose');

const PropertySchema = mongoose.Schema({
  propertyName: {type: String, required: true},
  propertyDescription:{type: String, required: true},
  propertySize:{type: String, required: true},

});

module.exports=mongoose.model('Property',PropertySchema);
