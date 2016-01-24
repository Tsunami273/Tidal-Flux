var fs = require('fs');

function smToTF(measure){
  var result = measure.map(function(e,i,c){
    return parseInt(e.slice(0,-2), 2);
  });
  return {notes: result, startTime: 0};
}

fs.readFile('./sm.txt', 'utf8', function(err, data){
  var measures = data.split(',');
  var notes = measures.map(function(e,i,c){
    return e.split('\n');
  });
  for(var i = 0 ; i < notes.length ; i++){
    for(var k = 0 ; k < notes[i].length; k++){
      if(notes[i][k] === '' || notes[i][k] === ';') notes[i].splice(k,1);
    }
  }
  notes[notes.length-1].splice(notes[notes.length-1].length-1, 1);
  measures = [];
  for(var i = 0 ; i < notes.length ; i++){
    measures.push(smToTF(notes[i]));
  }
  console.log(measures);
  return measures;
})

