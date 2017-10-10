var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var expensesSchema = new Schema({
	'creator': {type: Schema.Types.ObjectId, ref:"user", require:true},
	'name' : String,
	'company' : String,
	'quantity' : Number,
	'type': ['transporte', 'compras', 'online', 'ocio', 'moda']
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('expenses', expensesSchema);
