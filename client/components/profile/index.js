// import child components here.
var NavButton = require('../navButton.js');
var createScoresArray = require('./scores.js');
var Logout = require('../mainMenu/User.js');; //Logout for profile


Profile = React.createClass({
  getInitialState: function(){
    return {
      songsWithScores:[]
    }
  },

  componentDidMount: function(){
    $.ajax({
      url: '/api/scores?username=' + store.getState().username,
      dataType: 'json',
      type: 'GET',
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

  goToMainMenu: function(){
    store.dispatch(navigateToPage('MAIN'));
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