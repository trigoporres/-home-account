const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES = ['transporte', 'purchase', 'online', 'ocio'];
var user = require ('./userModel');


const expensesSchema = new Schema({
	'creator': {type: Schema.Types.ObjectId, ref:"user", require:true},
	'name' : String,
	'company' : String,
	'quantity' : Number,
	'type':  { type: String, enum: TYPES, required: true },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('expenses', expensesSchema);
