//evetually export these to other files and import all reducers to this file and combine them.
const main = function(state, action){
  state = state || {
    page:'MAIN',
    selectedSong:{title:'Reflection (Sanaas Remix)', 
                  artist:'Clion & Kamistory',
                  id: 1,
                  BPM: 173},
    username:'',
    keyBinds: ['s','d','f', 'j', 'k','l'],
    selectedDiff: 'Medium',
      judges: {
          Perfect: 0,
          Good: 0,
          Decent: 0,
          Miss: 0,
          health: 100,
          combo: 0,
        },
    scrollSpeed: 2,
    durations: [4000,3000,2000,1500,1100,750],
    globalOffset: -30,
    noFail: false
  }; 
  switch(action.type){
    case 'NAVIGATE':
      return Object.assign({}, state, {page: action.page}); 
    case 'SELECT_SONG':
      return Object.assign({}, state, {selectedSong: action.selected});
    case 'SIGN_IN':
      return Object.assign({}, state, {username: action.username, token: action.token});
    case 'LOG_OUT':
      return Object.assign({}, state, {username: ''});
    case 'SET_SCORE':
      return Object.assign({}, state, {score: action.score, judges: action.judges});
    case 'SET_DIFF':
      return Object.assign({}, state, {selectedDiff: action.diff});
    case 'SET_SCROLL':
      return Object.assign({}, state, {scrollSpeed: action.scroll});
    case 'SET_OFFSET':
      return Object.assign({}, state, {globalOffset: action.offset});
    case 'SET_KEY_BINDS':
      return Object.assign({}, state, {keyBinds: action.keyBinds});
    case 'SET_NO_FAIL':
      return Object.assign({}, state, {noFail: action.noFail});
    default:
      return state;
  }
}
module.exports.main = main;
