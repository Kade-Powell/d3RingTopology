//seems like we'll be using the d3 tree

let canvas = d3
  .select('body')
  .append('svg')
  .attr('width', 800)
  .attr('height', 600)
  .append('g')
  .attr('transform', 'translate(50,50)');

let tree = d3.layout.tree().size([400, 400]);

d3.json('apiData.json', function(data) {
  let nodes = tree.nodes(data);
  let links = tree.links(nodes);
  console.log(links);
});
