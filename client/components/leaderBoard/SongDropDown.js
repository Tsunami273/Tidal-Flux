var SongDropDown = React.createClass({
	setSong: function(event){
		var song = event.target.value;
		console.log('song', song);
	},
	render: function(){
		return(
			<select name="songs" onchange={this.setSong}>
  			<option value="1">Reflection (Sanaas Remix)</option>
  			<option value="2">Reflection (Yunomi Remix)</option>
  			<option value="3">Rosarium feat. 瑤山百霊</option>
  			<option value="4">Quickdraw</option>
			</select>
		)
	}
})

module.exports = SongDropDown;