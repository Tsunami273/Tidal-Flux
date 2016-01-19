var d3Notes = require('./d3Notes.js');
Notes = React.createClass({
    componentDidMount: function() {
      var el = this.refs.playarea;
      d3Notes.create(el, {}, {notes:this.props.stagedNotes});
    },
    componentDidUpdate: function() {
      var el = this.refs.playarea;
      d3Notes.update(el, {notes:this.props.stagedNotes});
    },
    render: function() {
        return (
          <div ref="playarea" className="playarea"></div>
        );
    }
});
module.exports = Notes;