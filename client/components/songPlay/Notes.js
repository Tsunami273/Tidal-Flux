var Lane = require('./Lane.js');
var placed
Notes = React.createClass({
    componentDidUpdate: function() {

    },
    render: function() {
        return (
          <div ref="playarea" className="playarea">
          {this.props.stagedNotes.map(function(e,i,c){
            return <Lane allNotes={c} key={i} laneNum={i} stagedNotes={e} />;
          })}
          </div>
        );
    }
});
module.exports = Notes;
