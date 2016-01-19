var supertest = require('supertest')
var chai = require('chai');

var should = chai.should();
var expect = chai.expect;
var server = supertest.agent("http://localhost:4000");



describe("Home Page",function(){

  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });

});


