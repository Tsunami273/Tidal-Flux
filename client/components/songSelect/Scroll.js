var navKeys = require('../navKeys.js');
var Scroll = React.createClass({
    getInitialState: function(diff){
      var currScroll = store.getState().scrollSpeed;
      return {
        scroll: currScroll,
        scrolls: [1,2,3,4,5,6],
      }
    },
    componentDidMount: function(){
      var combos = [];
      var that = this;
      this.state.scrolls.forEach(function(e,i,c){
        combos.push( navKeys(that, e.toString(), that.selectScroll.bind(that, e)) );
      });
      listener.register_many(combos);
    },
    selectScroll: function(scrollIndex) {
      this.setState({scroll: scrollIndex});
    },
    render: function() {
      var that = this;
        return (
          <div id="scroll"> 
          <h3>Scroll Speed: </h3>
          (slower)  
          {this.state.scrolls.map(function(e,i,c){
            var selected = classNames(e, {'selectedscroll': that.state.scroll === e});
            return (<span key={i} onClick={that.selectScroll.bind(that, e)} className={selected}> {e} </span>);
          })}
            (faster)&nbsp;&nbsp;
          </div>
        );
    }
});
module.exports = Scroll;
