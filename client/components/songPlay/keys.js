var makeKeyBinds = function(scope, key, i){   
      return {"keys": key,
          "on_keydown": function(event){
            var lane = {}
            lane['lane' + i] = true;
            this.setState(lane);
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[i][0] > currTime - 150 && this.state.notes[i][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var batting = Math.abs(this.state.notes[i][0] - currTime);
              var scoreAdd, healthAdd;
              if(batting<40){
                judge = 'Perfect';
                scoreAdd = 100;
                healthAdd = 5;
              }
              else if(batting<80){
                judge = 'Good';
                scoreAdd = 60;
                healthAdd = 3;
              }
              else {
                judge = 'Decent'
                scoreAdd = 20;
                healthAdd = 0;
              }
              notes[i].shift()
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;
              judgements.health = judgements.health + healthAdd;
              if(judgements.health > 100){
                judgements.health = 100;
              }

              var messageArray = [judge + judgements[judge]];

              this.setState({notes: notes,
              score: this.state.score + scoreAdd,
              message: judge,
              judgements: judgements,
              messageArray: messageArray});
            }
          },
          "on_keyup": function(event){
            var lane = {}
            lane['lane' + i] = false;
            this.setState(lane);
          }, 
          "this": scope
        };
}

module.exports = makeKeyBinds;
