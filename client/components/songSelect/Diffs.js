var Diffs = React.createClass({
    getInitialState: function(diff){
      var currDiff = store.getState().selectedDiff;
      return {
        diffs: ['Easy', 'Medium', 'Hard'],
        diff: currDiff
      }
    },
    selectDiff: function(diff) {
      this.setState({diff: diff})
    },
    render: function() {
      var that = this;
        return (
          <div>
          <h3>Difficulty: </h3>
          {this.state.diffs.map(function(e,i,c){
            var selected = classNames(e, {'selecteddiff': that.state.diff === e});
            return (<span key={i} onClick={that.selectDiff.bind(that, e)} className={selected}>{e}  </span>);
          })}
          </div>
        );
    }
});
module.exports = Diffs;
