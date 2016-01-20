var Lane = require('./Lane.js');
var placed
Notes = React.createClass({
    componentDidUpdate: function() {

    },
    render: function() {
      var songState = this.props.songState
        return (
          <div ref="playarea" className="playarea">
          {this.props.stagedNotes.map(function(e,i,c){
            return <Lane songState={songState} key={i} laneNum={i} stagedNotes={e} />;
          })}
          </div>
        );
    }
});
module.exports = Notes;
