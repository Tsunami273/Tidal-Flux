var makeKeyBinds = function(scope, key, i){   
      return {"keys": key,
          "on_keydown": function(event){
            var lane = {}
            lane['lane' + i] = true;
            this.setState(lane);
            var currTime = Date.now() - start - this.state.avgOffset;
            if(this.state.notes[i][0] > currTime - 150 && this.state.notes[i][0] < currTime + 150){
              var notes = this.state.notes.slice();
              var hits = [...this.state.hits];
              hits[i].push(currTime);
              var batting = Math.abs(this.state.notes[i][0] - currTime);
              var scoreAdd, healthAdd, judge;
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              if(batting<40){
                judge = 'Perfect';
                scoreAdd = this.state.noteScoreValues.perfect;
                healthAdd = 5;
                judgements.combo++;
              }
              else if(batting<80){
                judge = 'Good';
                scoreAdd = this.state.noteScoreValues.good;
                healthAdd = 3;
                judgements.combo++;
              }
              else {
                judge = 'Decent'
                scoreAdd = this.state.noteScoreValues.decent;
                healthAdd = 0;
                judgements.combo = 0; 
              }
              notes[i].shift()
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
              messageArray: messageArray,
              hits: hits});
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
