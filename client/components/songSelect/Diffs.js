var navKeys = require('../navKeys.js');
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
    componentDidMount: function(){
      var combos = [];
      this.state.diffs.forEach((e,i,c) => {
        var key = i > 0 ? i > 1 ? 'e' : 'w' : 'q';
        combos.push( navKeys(this, key, this.selectDiff.bind(this, e)) );
      })
      listener.register_many(combos);
    },
    render: function() {
      var that = this;
        return (
          <div id="diff">
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
