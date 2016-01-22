Judgement = React.createClass({
    componentDidMount: function() {
      var el = this.refs.judgement;
      var svg = d3.select(el).append('svg')
      .attr('class', 'judgement')
      .attr('width', 50)
      .attr('height', 200)

      svg.append('g')
      .attr('class', 'judgement-g');
    },
    componentDidUpdate: function() {
      var el = this.refs.judgement;
      var g = d3.select(el).selectAll('.judgement-g');
      var judgements = this.props.messages;
      console.log('judgement', judgements);

      var message = g.selectAll('text')
        .data(judgements, function(d){return d;});
       
      message
        .enter()
        .append('text')
        .text('Miss')
        .attr('x', 0)
        .attr('y', 100)
        .attr('width', 50)
        .attr('height', 20)
        .transition()
        .duration(70)
        .attr('y', 95)
        .transition()
        .duration(70)
        .attr('y', 100)
        .transition()
        .delay(250)
        .duration(300)
        .style("opacity", 0)
        

      message  
        .exit()
        .remove();
    },
    render: function() {
        return (
            <div ref="judgement"></div>
        );
    }
});
module.exports = Judgement;
