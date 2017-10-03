var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var debtSchema = new Schema({
	'name' : String,
	'quantity' : Number,
	'monthly' : Boolean,
	'fin' : Date
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('debt', debtSchema);
