NavButton = React.createClass({
    render: function() {
        return (
          <span className='clicky' onClick={this.props.onClick}>{this.props.dest}</span>
        );
    }
});
module.exports = NavButton;