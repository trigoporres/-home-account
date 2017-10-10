var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var debtSchema = new Schema({
	'creator': {type: Schema.Types.ObjectId, ref:"user", require:true},
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
