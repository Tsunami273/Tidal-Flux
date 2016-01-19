var supertest = require('supertest')
var chai = require('chai');

var expect = chai.expect;
var server = supertest.agent("http://localhost:4000");



describe("Server unit tests",function(){
  var player = {
    "username": "fest", 
    "password": "123"
  };

  var wrongPasswordPlayer = {
    "username": "dfsfsdfdsfsd",
    "password": "sdsdsd"
  }

  it("should return homepage",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .end(function(err,res){
      expect(res.status).to.equal(200);
      done();
    });
  });

  it("should be able to sign in",function(done){
    server
    .post('/api/player/signin')
    .send(JSON.stringify(player))
    .set('Content-type', 'application/json')
    .end(function(err,res){
      if (err) {
        throw err;
      }
      expect(res.status).to.equal(200);
      done();
    });
  });

  it("should not be able to sign in with wrong username/password",function(done){
    server
    .post('/api/player/signin')
    .send(JSON.stringify(wrongPasswordPlayer))
    .set('Content-type', 'application/json')
    .end(function(err,res){
      if (err) {
        throw err;
      }
      expect(res.status).to.equal(403);
      done();
    });
  });

  it("should be able to sign up",function(done){
    server
    .post('/api/player/signup')
    .send(JSON.stringify(player))
    .set('Content-type', 'application/json')
    .expect(200)
    .end(function(err,res){
      if (err) {
        throw err;
      }
      done();
    });
  });


  it("should return Error 404 for wrong url links",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      expect(res.status).to.equal(404);
      done();
    });
  });
});



