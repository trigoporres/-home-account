var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var expensesSchema = new Schema({
	'creator': String,
	'name' : String,
	'company' : String,
	'quantity' : Number,
	'monthly' : Boolean,
	'fin' : Date,
	'facture' : String
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('expenses', expensesSchema);
