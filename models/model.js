const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema( {
	username: String,
	password: String,
	coins:{
		type:Number,
		default:0
	},
	upCar:{
		type:String,
		default:'img4'
	}
})
const userModel = mongoose.model('user', userSchema);

module.exports = {userModel};

// //{
//     "dependencies": {
//         "bcryptjs": "^2.4.3",
//         "body-parser": "^1.19.0",
//         "cors": "^2.8.5",
//         "dotenv": "^10.0.0",
//         "express": "^4.17.1",
//         "jsonwebtoken": "^8.5.1",
//         "mongoose": "^6.0.12",
//         "uniqid": "^5.4.0"
//     },
//         "scripts": {
//             "start":"node server.js"
//           }
//     }

  