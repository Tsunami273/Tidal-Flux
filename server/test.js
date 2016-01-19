var supertest = require('supertest')
var chai = require('chai');

var should = chai.should();
var expect = chai.expect;
var server = supertest.agent("http://localhost:4000");



describe("Server unit tests",function(){
  var body = {
    "name": "fest", 
    "password": "123"
  };

  it("should return homepage",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      done();
    });
  });

  // it("should be able to sign in",function(done){
  //   server
  //   .post('/api/player/signin')
  //   .send(JSON.stringify(body))
  //   .expect("Content-type", /json/)
  //   .expect(200)
  //   .end(function(err,res){
  //     if (err) {
  //       throw err;
  //     }
  //     res.status.should.equal(401);
  //     res.body.name.should.equal('fest');
  //     res.body.password.should.equal('123');
  //     res.body.creationDate.should.not.equal(null);
  //     done();
  //   });
  // });

  it("should return 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  });
});



