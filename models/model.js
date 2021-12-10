const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema( {
	username: String,
	password: String,
	coins:{
		type:Number,
		default:0
	},
	upCar:String

})
const userModel = mongoose.model('user', userSchema);

module.exports = {userModel};