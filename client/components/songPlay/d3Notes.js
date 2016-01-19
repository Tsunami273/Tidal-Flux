var d3Notes = {};

d3Notes.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'playfield')
      .attr('width', 300)
      .attr('height', 800);

  svg.append('g')
      .attr('class', 'd3-points');

  this.update(el, state);
};

d3Notes.update = function(el, state) {
  // Re-compute the scales, and render the data points
  this._renderNotes(el, {}, state.data);
};

d3Notes.destroy = function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

d3Notes._renderNotes = function(el, scales, data) {
  var g = d3.select(el).selectAll('.d3-points');

  // var point = g.selectAll('.d3-point')
  //   .data(data, function(d) { return d.id; });

  // // ENTER
  // point.enter().append('circle')
  //     .attr('class', 'd3-point');

  // // ENTER & UPDATE
  // point.attr('cx', function(d) { return scales.x(d.x); })
  //     .attr('cy', function(d) { return scales.y(d.y); })
  //     .attr('r', function(d) { return scales.z(d.z); });

  // // EXIT
  // point.exit()
  //     .remove();
};

module.exports = d3Notes;
