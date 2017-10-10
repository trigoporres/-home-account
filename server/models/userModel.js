var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'first_name' : String,
	'last_name' : String,
	'email' : String,
	'username': String,
	'password' : String,
	'phone' : Number,
	'salary' : Number,
	'money': Number,
	'location' : String,
	'image': String,
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('user', userSchema);
