var request = require('superagent')

// var mocha = require('mocha');
var chai = require('chai');
// var server = supertest.agent("http://localhost:4000");

var server = require('./server.js');

var expect = chai.expect;
// var should = chai.should();

expect(foo).to.be.a('string');

// describe('Homepage', function(){

//   it("should respond to GET request", function(done){
//     request.get('localhost:4000/')
//       .end(function(err,res){
//         expect(res).to.exist;
//         expect(res.status).to.equal(200);
//         done();
//       })
//   });
// })