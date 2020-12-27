const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../server/app');


describe('Testing the app',()=>{
	it('checking user existence',(done)=>{
		request(app).post('/api/login')
			.send({
				username : "kashware",
				password : "round1"
			})
			.then((res)=>{
				const body = res.body;
				expect(body).to.contain.property('message');
				expect(body).to.contain.property('token');
				done();
			})
			.catch((err)=>done(err));
	});
	it('checking applyJSONpatch request',(done)=>{
		request(app).post('/api/login')
		.send({
			username : "kashware",
			password : "round1"
		})
		.then((res)=>{
			const body = res.body;
			request(app).post('/api/applyJSONpatch')
				.send({
				    "doc" : {
				        "baz": "qux",
				        "foo": "bar"
				    },
				    "patch" : [
				        { "op": "replace", "path": "/baz", "value": "boo" }
				    ]
				})
				.set('Authorization',`Bearer ${body.token}`)
				.then((res)=>{
					const body = res.body;
					expect(body).to.contain.property('baz');
					expect(body).to.contain.property('foo');
					done();
				})
				.catch((err)=>done(err))

		})
		.catch((err)=>done(err));
	});


})