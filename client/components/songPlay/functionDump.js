var findMeasureStartTimes = function(beatMap, beatsPerMinute){
  // if the time signature is 4/4 then there will be 4 beats per measure
  // if (timeSignature !== '4/4'){
  //   //need to update how many beats there are per measure
  // }
  var beatsPerMeasure = 4; //default beats per measure
  var beatsPerSecond = beatsPerMinute * (1/60);
  var beatsPerMillisecond = beatsPerSecond * (1/1000);
  var millisecondsPerMeasure = beatsPerMeasure/beatsPerMillisecond; //( beats/measure * milliseconds/beats = milliseconds/measure)

  // loop over each measure and assign a time in milliseconds
  for(var measure = 1; measure < beatMap.length; measure++){
    beatMap[measure].startTime = beatMap[measure-1].startTime + millisecondsPerMeasure;
  }
  return beatMap;
}

var findNoteTimes = function(timedBeatMap){
  var millisecondsPerMeasure = timedBeatMap[1].startTime;
  var noteTimes = [[],[],[],[],[],[]];
  for(var measure = 0; measure < timedBeatMap.length; measure++){
    var notesPerMeasure = timedBeatMap[measure].notes.length;
    for(var note = 0; note < notesPerMeasure; note++){
      if(timedBeatMap[measure].notes[note] === 0){
        continue;
      }
      var timeInMeasure = millisecondsPerMeasure / notesPerMeasure
      var noteTimeInMeasure = timeInMeasure * note;
      var noteTime = noteTimeInMeasure + timedBeatMap[measure].startTime;

      var laneString = timedBeatMap[measure].notes[note].toString(2);
      while(laneString.length < 6){
        laneString = '0' + laneString;
      }
      for(var i = 0; i < 6; i++){
        if(laneString.charAt(i) === '1'){
          noteTimes[i].push(noteTime);
        }
      }
    }        
  }
  return noteTimes;
}

module.exports.findMeasureStartTimes = findMeasureStartTimes;
module.exports.findNoteTimes = findNoteTimes;
