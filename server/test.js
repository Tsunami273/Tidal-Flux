var supertest = require('supertest')
var chai = require('chai');

var expect = chai.expect;
var server = supertest.agent("http://localhost:4000");



describe("Server unit tests",function(){
  var player = {
    "username": "iasssddasdsa",
    "email": "bcryasdsapt@emassjil.com",  
    "password": "1sssm2s3sdf"
  };

  var scores = {
    "username": "Mithril",
    "song": "down",
    "points": "5",
    "difficulty": "easy"
  }

  var wrongPasswordPlayer = {
    "username": "dfsfsdsfdsfsd",
    "password": "sdsdsxhhxd"
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

  // it("should be able to sign up",function(done){
  //   server
  //   .post('/api/player/signup')
  //   .send(JSON.stringify(player))
  //   .set('Content-type', 'application/json')
  //   .expect(200)
  //   .end(function(err,res){
  //     if (err) {
  //       throw error;
  //     }
  //     done();
  //   });
  // });


  // it("should be able to sign in",function(done){
  //   server
  //   .post('/api/player/signin')
  //   .send(JSON.stringify(player))
  //   .set('Content-type', 'application/json')
  //   .end(function(err,res){
  //     if (err) {
  //       throw err;
  //     }
  //     expect(res.status).to.equal(200);
  //     done();
  //   });
  // });

  // it("should NOT BE ABLE to sign in with wrong username/password",function(done){
  //   server
  //   .post('/api/player/signin')
  //   .send(JSON.stringify(wrongPasswordPlayer))
  //   .set('Content-type', 'application/json')
  //   .end(function(err,res){
  //     if (err) {
  //       throw err;
  //     }
  //     expect(res.status).to.equal(403);
  //     done();
  //   });
  // });

  // it("should return Error 404 for wrong url links",function(done){
  //   server
  //   .get("/random")
  //   .expect(404)
  //   .end(function(err,res){
  //     expect(res.status).to.equal(404);
  //     done();
  //   });
  // });

  // it("Should be able to add a New Score",function(done){
  //   server
  //   .post('/api/player/score')
  //   .send(JSON.stringify(scores))
  //   .set('Content-type', 'application/json')
  //   .end(function(err,res){
  //     if (err) {
  //       throw err;
  //     }
  //     expect(res.status).to.equal(200);
  //     done();
  //   });
  // });

  it("Should not update score if New Score is low",function(done){
    server
    .post('/api/player/score')
    .send(JSON.stringify(scores))
    .set('Content-type', 'application/json')
    .end(function(err,res){
      if (err) {
        throw err;
      }
      expect(res.status).to.equal(200);
      done();
    });
  });
});



