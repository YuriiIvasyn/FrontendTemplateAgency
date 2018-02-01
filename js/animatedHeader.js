function getRandomArbitary(min, max)
      {
        return Math.random() * (max - min) + min;
      }
   
      /* Set coordinats variable */
      $(".svg-container").css("left","-100px");
      var WindowWidth = $(".svg-container").parent().outerWidth();
      var WindowHeight = $(".svg-container").parent().outerHeight();
      var i = 0;
      var NumOfPoints = 400;
    var width = WindowWidth,
    height = WindowHeight;
     

    var nodes = d3.range(NumOfPoints).map(function(i)
        {
        return {
            radius: 2.5,
            x: (i%50)*20+getRandomArbitary(-40,40),
            y: height-Math.floor(i/70)*50+(width*0.2-(i%50)*20)*0.5+getRandomArbitary(-70,70)
          };
      }),
    root = nodes[0];
    root.radius = 80;
    root.fixed = true;
    var force = d3.layout.force().gravity(-0.0005).charge(-0.001).nodes(nodes).size([width, height]);
    force.start();
    var svg = d3.select(".svg-container").append("svg").attr("width", width).attr("height", height);
    var Rstart = 133,
      Gstart = 109,
        Bstart = 243,
        Rfinish = 34,
        Gfinish = 216,
        Bfinish = 201;
    var circles = svg.selectAll("circle").data(nodes.slice(1)).enter().append("circle").attr("r", function(d)
    {
      return d.radius;
    }).style("fill", function(d, i)
    {
      var r = Math.round(Rstart + (Rfinish - Rstart) * (i) / NumOfPoints),
          g = Math.round(Gstart + (Gfinish - Gstart) * (i) / NumOfPoints),
          b = Math.round(Bstart + (Bfinish - Bstart) * (i) / NumOfPoints);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }).style('opacity', 0);
    var speedc = height/width;
    var dotsSpeed=0.08;
    force.on("tick", function(e)
    {
      var q = d3.geom.quadtree(nodes),
        i = 0,
        n = nodes.length;
          
        while (++i < n) q.visit(collide(nodes[i]));
        
        
     /* d3.selectAll("circle").each(function(){
        d3.select(this).style("top", 100).style("left", 100);
      });*/
    
        
    });
  var t = d3.interval(function(elapsed) {
    d3.selectAll("circle").each(function(d){

        if(d.x > width || d.y < -1){
            coefy=height+5;
          coefx=-5;
          }
          else{
            coefx= (d.x>0)?d.x=d.x+dotsSpeed:d.x=d.x-d.x+getRandomArbitary(-10,0);
          
            coefy= (d.y>height)?d.y=height-10+getRandomArbitary(0,60):d.y=d.y-dotsSpeed*speedc;
          }
        d3.select(this).attr("cx",function(d){
          return d.x=coefx;
          
        }).attr("cy", function(d){
          return d.y = coefy;
        })
      });
    
  }, 1);
  var t = d3.interval(function(elapsed) {
    force.start();
  },100);
d3.selectAll("circle").transition()
    .delay(function(d,i) { return i*5; })
    .duration(1250)
    .style('opacity', 1);

    svg.on("mousemove", function()
      {
        var p1 = d3.mouse(this);
        root.px = p1[0];
        root.py = p1[1];
        force.resume();
      });

      function collide(node)
      {
        var r = node.radius,
          nx1 = node.x - r,
          nx2 = node.x + r,
          ny1 = node.y - r,
          ny2 = node.y + r;
        return function(quad, x1, y1, x2, y2)
        {
          if (quad.point && (quad.point !== node))
          {
            var x = node.x - quad.point.x,
              y = node.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = node.radius + quad.point.radius + 1;
            if (l < r)
            {
              l = (l - r) / l * .2;
              node.x -= x *= l;
              node.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        };
      }