
var CreditBlock = React.createClass({
    render: function() {
        return (
        <div className="credit-block" > {this.props.snippet} <br />
        <a target="_blank" href={this.props.track}>Track Link</a> <br />
        <a target="_blank" href={this.props.artist}>Artist Soundcloud</a>
        </div>
        );
    }
});
module.exports = CreditBlock;