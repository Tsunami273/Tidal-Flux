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

setDiff = function(diff){
  return {
    type:'SET_DIFF',
    diff: diff,
  }
}

setScroll = function(scroll){
  return {
    type:'SET_SCROLL',
    scroll: scroll
  }
}

setOffset = function(offset){
  return {
    type:'SET_OFFSET',
    offset: offset
  }
}

signIn = function(username){
  return {
    type:'SIGN_IN',
    username: username
  }
}

setKeyBinds = function(keyBinds){
  return {
    type:'SET_KEY_BINDS',
    keyBinds: keyBinds
  }
}


