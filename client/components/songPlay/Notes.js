var Lane = require('./Lane.js');
Notes = React.createClass({
    render: function() {
        return (
          <div ref="playarea" className="playarea">
          {this.props.stagedNotes.map(function(e,i,c){
            return <Lane key={i} laneNum={i} stagedNotes={e} />;
          })}
          </div>
        );
    }
});
module.exports = Notes;
