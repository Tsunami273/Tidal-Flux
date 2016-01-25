Judgement = React.createClass({
    componentDidMount: function() {
      var el = this.refs.judgement;
      var svg = d3.select(el).append('svg')
      .attr('class', 'judgement')
      .attr('x', 600)
      .attr('y', 600)
      .attr('width', 200)
      .attr('height', 200)

      svg.append('g')
      .attr('class', 'judgement-g');
    },
    componentDidUpdate: function() {
      var el = this.refs.judgement;
      var g = d3.select(el).selectAll('.judgement-g');
      var judgements = this.props.messages;
      var combo = this.props.combo;
      var message = g.selectAll('text')
        .data(judgements, function(d){return d;});
       
      message
        .enter()
        .append('text')
        .append('tspan')
        .attr('x', 100)
        .attr('y', 150)
        .attr('text-anchor', 'middle')
        .attr('class', 'combomessage')
        .text('Combo: ' + combo)
        .append('tspan')
        .text(function(d){ 
          switch(d.charAt(0)){
            case 'P': 
              return 'Perfect';
            case 'G': 
              return 'Good';
            case 'D':
              return 'Decent';
            case 'M':
              return 'Miss';
            default:
              return undefined;
          }
        })
        .attr('x', 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .attr('class', 'judgemessage')
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
            <div ref="judgement" className="judgetext"></div>
        );
    }
});
module.exports = Judgement;
