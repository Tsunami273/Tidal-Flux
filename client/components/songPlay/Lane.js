Lane = React.createClass({
    componentDidMount: function() {
      var el = this.refs.lanearea;
      var svg = d3.select(el).append('svg')
      .attr('class', 'playfield')
      .attr('width', 50)
      .attr('height', 800)

      var laneNum = this.props.laneNum;
      svg.append('g')
      .attr('class', 'd3-points')
        .append("line")
        .attr("x1", 0)
        .attr("y1", 790)
        .attr("x2", 50)
        .attr("y2", 790)
        .attr("stroke-width", 10)
        .attr("stroke", "red");
    },
    componentDidUpdate: function() {
      var el = this.refs.lanearea;
      var g = d3.select(el).selectAll('.d3-points');
      var notes = this.props.stagedNotes;
      var CurrentSongTime = Date.now() - start;
      var avgOffSet = this.props.songState.state.avgOffset;

      var notes = g.selectAll('rect')
        .data(notes, function(d){return d;})
       
      notes
        .enter()
        .append('rect')
        .attr('class', 'note')
        .attr('x', 0)
        .attr('y', 0)
        .transition()
        .attr('y',790)
        .duration(2500)
        .delay(function(d){return d - CurrentSongTime + avgOffSet - 2500 ;})
        .ease('linear')

      notes  
        .exit()
        .remove();
    },
    render: function() {
        var triggered = this.props.songState.state['lane'+this.props.laneNum];
        var laneID = "lanearea" + this.props.laneNum;
        var laneClass = classNames(laneID, {'triggered': triggered});
        return (
            <div ref="lanearea" className={laneClass} ></div>
        );
    }
});
module.exports = Lane;
