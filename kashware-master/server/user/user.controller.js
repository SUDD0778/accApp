const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user.model');
const ACCESS_SECRET = require('../secret').ACCESS_SECRET;

exports.signUp = function (req, res) {
	console.log("signUp", req.body);
	try{
	let user = {};
	user.name = req.body.username;
		bcrypt.hash(req.body.password,10,(err,hashedPassword)=>{
			console.log("in",hashedPassword);
			try {
			if(err) console.log("err", err);
			user.password = hashedPassword;
			var newUser = new User(user);
			console.log("newUser", User);
			User.find({}, function(err, user) {
				console.log("er",err,"user" ,user);
			}) 
			// newUser.save(function (err, user) {
			// 	console.log("saved");
			// 	if (err) return validationError(res, err);
			// 	var token = jwt.sign({_id: user._id }, ACCESS_SECRET, { expiresInMinutes: 60 * 12 });
			// 	res.json({ token: token, user:user });
			//   });
			} catch(err) {console.log("err ",err);}
		});
	}catch(err){
		console.log(err);
	}
	
};

// router.post('/',(req,res)=>{
// 	var user = users.find((tuser)=>tuser.username == req.body.username);
// 	if(user){
// 		bcrypt.compare(req.body.password,user.password,(err,result)=>{
// 			if(err){
// 				return res.status(401).json({message : "Incorrect Password"})
// 			}else{
// 				let token = jwt.sign({username : req.body.username},ACCESS_SECRET);
// 				return res.status(200).json({message : "Authenticated",token});
// 			}
// 		})
// 	}else{
// 		return res.status(404).json({message : "user not found"})
// 	}
// });

var validationError = function(res, err) {
	return res.json(422, err);
};
