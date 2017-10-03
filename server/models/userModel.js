var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'first_name' : String,
	'last_name' : String,
	'email' : String,
	'password' : String,
	'phone' : Number,
	'salary' : Number,
	'address' : String,
	'gastos' : Array,
	'balance' : Number,
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('user', userSchema);
