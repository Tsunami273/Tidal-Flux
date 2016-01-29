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
navigateFromSelect = function(page, song, scroll, diff){
  return {
      type: 'NAV_FROM_SELECT',
      page: page,
      song: song,
      scroll: scroll,
      diff: diff
  }
}
setScore = function(score, judges){
  return {
    type:'SET_SCORE',
    page: 'SCORE',
    score: score,
    judges: judges
  };
}

setDiff = function(diff){
  return {
    type:'SET_DIFF',
    diff: diff
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

signIn = function(username, token, offset, keybinds){
  return {
    type:'SIGN_IN',
    page: 'MAIN',
    username: username,
    token: token,
    offset: offset,
    keybinds: keybinds
  }
}

setKeyBinds = function(keybinds){
  return {
    type:'SET_KEY_BINDS',
    keybinds: keybinds
  }
}


