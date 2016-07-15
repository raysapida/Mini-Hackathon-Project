function createToneChart(responseData){

	var data = responseData.document_tone.tone_categories[0].tones;

	var svg = d3.select("#donut-chart")
	.append("svg")
	.append("g")

	svg.append("g")
	.attr("class", "slices");
	svg.append("g")
	.attr("class", "labels");
	svg.append("g")
	.attr("class", "lines");

	var width = 350,
	height = 200,
	radius = Math.min(width, height) / 2;

	var pie = d3.layout.pie()
	.sort(null)
	.value(function(d) {
		return d.value;
	});

	var arc = d3.svg.arc()
	.outerRadius(radius * 0.8)
	.innerRadius(radius * 0.4);

	var outerArc = d3.svg.arc()
	.innerRadius(radius * 0.9)
	.outerRadius(radius * 0.9);

	svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var key = function(d){ return d.data.label; };

	var color = d3.scale.ordinal()
	.domain(["Content", "Disgust", "Anger", "Calm", "Joy" ])
	.range(["#FB5607", "#FFBE0B", "#FF006E", "#3A86FF", "#8338EC"]);


	function randomData (){
		// var dataPoints = color.domain();
		// var dataValues = [1, 4, 0.6, 7, 9];
		// var i = -1
		return data.map(function(dataPoint){
			// i ++;
			return { label: dataPoint.tone_name, value: dataPoint.score }
		});
	}

	change(randomData());

	d3.select(".randomize")
	.on("click", function(){
		change(randomData());
	});


	function change(data) {

		/* ------- PIE SLICES -------*/
		var slice = svg.select(".slices").selectAll("path.slice")
		.data(pie(data), key);

		slice.enter()
		.insert("path")
		.style("fill", function(d) { return color(d.data.label); })
		.attr("class", "slice");

		slice
		.transition().duration(1000)
		.attrTween("d", function(d) {
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				return arc(interpolate(t));
			};
		})

		slice.exit()
		.remove();

		/* ------- TEXT LABELS -------*/

		var text = svg.select(".labels").selectAll("text")
		.data(pie(data), key);

		text.enter()
		.append("text")
		.attr("dy", ".35em")
		.text(function(d) {
			return d.data.label;
		});

		function midAngle(d){
			return d.startAngle + (d.endAngle - d.startAngle)/2;
		}

		text.transition().duration(1000)
		.attrTween("transform", function(d) {
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var d2 = interpolate(t);
				var pos = outerArc.centroid(d2);
				pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
				return "translate("+ pos +")";
			};
		})
		.styleTween("text-anchor", function(d){
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var d2 = interpolate(t);
				return midAngle(d2) < Math.PI ? "start":"end";
			};
		});

		text.exit()
		.remove();

		/* ------- SLICE TO TEXT POLYLINES -------*/

		var polyline = svg.select(".lines").selectAll("polyline")
		.data(pie(data), key);

		polyline.enter()
		.append("polyline");

		polyline.transition().duration(1000)
		.attrTween("points", function(d){
			this._current = this._current || d;
			var interpolate = d3.interpolate(this._current, d);
			this._current = interpolate(0);
			return function(t) {
				var d2 = interpolate(t);
				var pos = outerArc.centroid(d2);
				pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
				return [arc.centroid(d2), outerArc.centroid(d2), pos];
			};
		});

		polyline.exit()
		.remove();
	};
}


function createStackedBarChart(responseData) {
	var data = responseData.document_tone.tone_categories[1].tones;
	console.log(data)

	var margin = {top: 50, right: 20, bottom: 10, left: 65},
	width = 800 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	var y = d3.scale.ordinal()
	.rangeRoundBands([0, height], .3);

	var x = d3.scale.linear()
	.rangeRound([0, width]);

	var color = d3.scale.ordinal()
	.range(["#F75C03", "#D90368", "#04A777"]);

	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("top");

	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")

	var svg = d3.select("#figure").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.attr("id", "d3-plot")
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	color.domain(["Analytical", "Confident", "Tentative"]);

    // calc percentages
    var sum = data[0]['score'] + data[1]['score'] + data[2]['score']
    data["Analytical"] = +data[0]['score']*100/sum;
    data["Confident"] = +data[1]['score']*100/sum;
    data["Tentative"] = +data[2]['score']*100/sum;

    console.log(data)

    var x0 = -1*(data["Analytical"]/2+data["Confident"]+data["Tentative"]);

    data.boxes = color.domain().map(function(name) { return {name: name, x0: x0, x1: x0 += +data[name], Analytical: +data['Analytical']};

		// var min_val = d3.min(data, function(d) {
		// 	return d.boxes["0"].x0;
		// });

		// var max_val = d3.max(data, function(d) {
		// 	return d.boxes["4"].x1;
		// });

		x.domain([0, 100]).nice();
		y.domain("Text");

		svg.append("g")
		.attr("class", "x axis")
		.call(xAxis);

		svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)

		var vakken = svg.selectAll("div")
		.data(data)
		.enter().append("g")
		.attr("class", "bar")
		.attr("transform", function(d) { return "translate(0," + y(d.Text) + ")"; });

		var bars = vakken.selectAll("rect")
		.data(function(d) { return d.boxes; })
		.enter().append("g").attr("class", "subbar");

		bars.append("rect")
		.attr("height", y.rangeBand())
		.attr("x", function(d) { return x(d.x0); })
		.attr("width", function(d) { return x(d.x1) - x(d.x0); })
		.style("fill", function(d) { return color(d.name); });

		bars.append("text")
		.attr("x", function(d) { return x(d.x0); })
		.attr("y", y.rangeBand()/2)
		.attr("dy", "0.5em")
		.attr("dx", "0.5em")
		.style("font" ,"10px sans-serif")
		.style("text-anchor", "begin")
		.text(function(d) { return d.n !== 0 && (d.x1-d.x0)>3 ? d.n : "" });

		vakken.insert("rect",":first-child")
		.attr("height", y.rangeBand())
		.attr("x", "1")
		.attr("width", width)
		.attr("fill-opacity", "0.5")
		.style("fill", "#F5F5F5")
		.attr("class", function(d,index) { return index%2==0 ? "even" : "uneven"; });

		svg.append("g")
		.attr("class", "y axis")
		.append("line")
		.attr("x1", x(0))
		.attr("x2", x(0))
		.attr("y2", height);

		var startp = svg.append("g").attr("class", "legendbox").attr("id", "mylegendbox");
  // this is not nice, we should calculate the bounding box and use that
  var legend_tabs = [0, 120, 200, 375, 450];
  var legend = startp.selectAll(".legend")
  .data(color.domain().slice())
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(" + legend_tabs[i] + ",-45)"; });

  legend.append("rect")
  .attr("x", 0)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", color);

  legend.append("text")
  .attr("x", 22)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "begin")
  .style("font" ,"10px sans-serif")
  .text(function(d) { return d; });

  d3.selectAll(".axis path")
  .style("fill", "none")
  .style("stroke", "#000")
  .style("shape-rendering", "crispEdges")

  d3.selectAll(".axis line")
  .style("fill", "none")
  .style("stroke", "#000")
  .style("shape-rendering", "crispEdges")

  var movesize = width/2 - startp.node().getBBox().width/2;
  d3.selectAll(".legendbox").attr("transform", "translate(" + movesize  + ",0)");

 });

}


