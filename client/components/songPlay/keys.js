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
              console.log(batting);
              if(batting<40){
                judge = 'Perfect';
              }
              else if(batting<80){
                judge = 'Good';
              }
              else {
                judge = 'Decent'
              }
              notes[i].shift()
              var judgements = {};
              Object.assign(judgements,this.state.judgements);
              judgements[judge]++;

              this.setState({notes: notes,
              score: this.state.score + 100,
              message: judge,
              judgements: judgements});
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
