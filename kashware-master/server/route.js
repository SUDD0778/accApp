"use strict";
const AUTH = require('./auth');
const cors = require('cors');

module.exports = (app)=>{

	
	// app.use('/api/v1/login',require('./login'));
	app.use('/api/v1/user',require('./user'));

}
