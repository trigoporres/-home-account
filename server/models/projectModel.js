var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var projectSchema = new Schema({
	'name' : String,
	'quantity' : Number,
	'fin' : Date
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('project', projectSchema);
