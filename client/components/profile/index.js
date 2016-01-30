// import child components here.
var NavButton = require('../navButton.js');
var createScoresArray = require('./scores.js');
var Logout = require('../mainMenu/User.js');; //Logout for profile


Profile = React.createClass({
  getInitialState: function(){
    var player = store.getState();
    return {
      username : player.username,
      songsWithScores:[]
    }
  },

  componentDidMount: function(){
    $.ajax({
      url: '/api/scores/',
      dataType: 'json',
      type: 'GET',
      data: {username: this.state.username },  //To get all scores for the user
      success: function(data){
        var songsWithScores = createScoresArray(data);
        this.setState({songsWithScores: songsWithScores});
        console.log('this.state', this.state);
      }.bind(this),
      error: function(err){
        console.log('error: ', err);
      }.bind(this)
    })
  },

  goToLogin: function(){
      store.dispatch(navigateToPage('LOGIN'));
  },

  goToSignup: function(){
    store.dispatch(navigateToPage('SIGNUP'));
  },

  render: function(){


    var that = this;

    //Sort scores by song and difficulty
    var ByDifficulty = React.createClass({
      render: function(){
        return(
          <div>
            {this.props.score}
          </div>
        )
      }
    });

    return(
      <div id="leaderContain">
        <Logout login={this.goToLogin} signup={this.goToSignup}/>
        <h1>My Profile</h1>
        {this.state.songsWithScores.map(function(song, index, allSongs){
          return(
          <div className="leaderCard" key={index}>
            <div className="leader-card-title">{song.title}</div>
            <div className="leader-card-artist">{song.artist}</div>
            <div className="easyScore"><h3>easy</h3>
            {song.easy.map(function(userScore, index, allEasyScores){
              return(
                <ByDifficulty score={userScore[1]} key={index}/>
                )
              })}
            </div>
            <div className="mediumScore"><h3>medium</h3>
            {song.medium.map(function(userScore, index, allEasyScores){
              return(
                <ByDifficulty score={userScore[1]} key={index}/>
                )
              })}
            </div>
            <div className="hardScore"><h3>hard</h3>
            {song.hard.map(function(userScore, index, allEasyScores){
              return(
                <ByDifficulty score={userScore[1]} key={index}/>
                )
              })}
            </div>
          </div>
            )
          })}
        <div className="clicky" id="back" onClick={this.goToMainMenu}>
          <h3>Back</h3>
        </div>  
      </div>
    );  
  }
});

module.exports = Profile;