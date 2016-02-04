var CreditBlock = require('./creditBlock.js');
var navKeys = require('../navKeys.js');

Credits = React.createClass({
    getInitialState: function(){
      var user = store.getState().username; 
      return {user: user};
    },
    goToMainMenu: function(){
      store.dispatch(navigateToPage('MAIN'))
    },
    componentDidMount: function(){
      var combos = [];
      combos.push(navKeys(this, 'esc', this.back));
      combos.push(navKeys(this, 'backspace', this.back));
      listener.register_many(combos);
    },
    componentWillUnmount: function(){
      listener.reset();
    },
    render: function() {
        return (
        <div>
        <div id="creditContain">
          <div id="title">
            <img src="TidalFlux.svg" alt="Tidal Flux"></img>
          </div>
          <br />
          <CreditBlock snippet="Clion & Kamisory - Reflection (Sanaas Remix) by Sanaas is licensed under a  Creative Commons License."
          track="https://soundcloud.com/sanaas/clion-kamisory-reflection-sanaas-remix"
          artist="https://soundcloud.com/sanaas" />
          <CreditBlock snippet="rekanan - REFLECTION feat. アンテナガール(Yunomi Remix) by yuzame-label is licensed under a  Creative Commons License." 
          artist="https://soundcloud.com/tkrism"
          track="https://soundcloud.com/yuzame-label/reflection-yunomi" />
          <CreditBlock snippet="Rosarium feat 瑤山百霊 by himmel.LEMiao is licensed under a  Creative Commons License." 
          artist="https://soundcloud.com/himmeltengoku"
          track="https://soundcloud.com/himmeltengoku/rosarium-feat-f-c-yonder-voice" />
          <CreditBlock snippet="Sanaas - Quickdraw by Sanaas is licensed under a  Creative Commons License." 
          artist="https://soundcloud.com/sanaas"
          track="https://soundcloud.com/sanaas/sanaas-quickdrawfc-vivid-hardcore" />
          <CreditBlock snippet="Batsu - C0ld night by yuzame-label is licensed under a  Creative Commons License." 
          artist="https://soundcloud.com/batsu_x_hayato"
          track="https://soundcloud.com/yuzame-label/c0ld-night" />
          <CreditBlock snippet="ΔMUNOA - i ωɒN̂t iẗ ThÅt ωay by yuzame-label is licensed under a  Creative Commons License."
          artist="https://soundcloud.com/toshi-9"
          track="https://soundcloud.com/yuzame-label/i-want-it-that-way" />
          <div id="credits" className="clicky" onClick={this.goToMainMenu}>
            <h3>Back</h3>
          </div>
        </div>
        </div>
        );
    }
});
module.exports = Credits;