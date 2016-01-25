var supertest = require('supertest')
var chai = require('chai');

var expect = chai.expect;
var server = supertest.agent("http://localhost:4000");



describe("Server unit tests",function(){

  it("should return homepage",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .end(function(err,res){
      expect(res.status).to.equal(200);
      done();
    });
  });

  it("should be able to sign up",function(done){
    var player = {
      "username": "iasssda",
      "email": "bcryasdsapt@emassjil.com",  
      "password": "1sssm2s3sdf"
    };

    server
    .post('/api/player/signup')
    .send(JSON.stringify(player))
    .set('Content-type', 'application/json')
    .expect(200)
    .end(function(err,res){
      if (err) {
        throw error;
      }
      done();
    });
  });


  it("should be able to sign in",function(done){
    var player = {
      "username": "iasssda",
      "email": "bcryasdsapt@emassjil.com",  
      "password": "1sssm2s3sdf"
    };

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

  it("should NOT BE ABLE to sign in with wrong username/password",function(done){
    var player = {
      "username": "iasssda",
      "password": "1ssss3sdf"
    };

    server
    .post('/api/player/signin')
    .send(JSON.stringify(player))
    .set('Content-type', 'application/json')
    .end(function(err,res){
      if (err) {
        throw err;
      }
      expect(res.status).to.equal(403);
      done();
    });
  });


  it("Should be able to add a new score(Including first time playing song, level)",function(done){
    var scores = {
      "username": "Juice",
      "song": "dog",
      "points": "5",
      "difficulty": "Hard"
    }

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


  it("Should notify new score is lower than high score",function(done){
    var scores = {
      "username": "Juice",
      "song": "dog",
      "points": "5",
      "difficulty": "Hard"
    }

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

  it("Should add new high score",function(done){
    var scores = {
      "username": "Juice",
      "song": "dog",
      "points": "50",
      "difficulty": "Hard"
    }

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



