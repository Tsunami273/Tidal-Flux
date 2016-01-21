navigateToPage = function(page){ 
  return {
          type: 'NAVIGATE',
          page: page
        };
}
selectSong = function(song){
  return {
    type:'SELECT_SONG',
    selected: song
  };
}
setScore = function(score, judges){
  return {
    type:'SET_SCORE',
    score: score,
    judges: judges
  };
}