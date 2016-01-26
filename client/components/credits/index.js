var CreditBlock = require('./creditBlock.js');

Credits = React.createClass({
    getInitialState: function(){
      var user = store.getState().username; 
      return {user: user};
    },
    goToMainMenu: function(){
      store.dispatch(navigateToPage('MAIN'))
    },
    render: function() {
        return (
        <div>
        <div id="menucontain">
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
          <div id="credits" className="clicky" onClick={this.goToMainMenu}>
            <h3>Back</h3>
          </div>
        </div>
        </div>
        );
    }
});
module.exports = Credits;