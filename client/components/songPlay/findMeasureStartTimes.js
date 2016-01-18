var findMeasureStartTimes = function(beatMap, beatsPerMinute){
  //if the time signature is 4/4 then there will be 4 beats per measure
  // if (timeSignature !== '4/4'){
  //   //need to update how many beats there are per measure
  // }
  var beatsPerMeasure = 4;//default beats per measure
  var beatsPerSecond = beatsPerMinute * (1/60);
  var beatsPerMillisecond = beatsPerSecond * (1/1000);
  var millisecondsPerMeasure = beatsPerMeasure/beatsPerMillisecond;//( beats/measure * milliseconds/beats = milliseconds/measure)

  var previousMeasure = 'm1';
  //loop over each measure and assign a time in milliseconds
  for(measure in beatMap){
    if(measure === 'm1'){
      continue;
    }
    beatMap[measure].startTime = beatMap[previousMeasure].startTime + millisecondsPerMeasure;
    previousMeasure = measure;
  }
  return beatMap;
}

module.exports = findMeasureStartTimes;

findMeasureStartTimes(beatMap2, 185);