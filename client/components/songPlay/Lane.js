var d3Notes = require('./d3Notes.js');
Lane = React.createClass({
    componentDidMount: function() {
      var el = this.refs.lanearea;
      d3Notes.create(el, {}, {notes:this.props.stagedNotes,
        laneNum: this.props.laneNum
      });
    },
    componentDidUpdate: function() {
      if(this.props.stagedNotes.length){
        var el = this.refs.lanearea;
        d3Notes.update(el, {notes:this.props.stagedNotes,
          laneNum: this.props.laneNum,
          songState: this.props.songState
        });
      }
    },
    render: function() {
        var laneID = "lanearea" + this.props.laneNum;
        return (
            <div ref="lanearea" className={laneID}></div>
        );
    }
});
module.exports = Lane;