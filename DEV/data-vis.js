// console.log('sim sim salabim');
// 'use strict'

// function getTopicObject(arr) {
//     var obj = {};

//     arr.forEach(i => {
//         i.topic.forEach(t => {
//             if (!obj.hasOwnProperty(t)) {
//                 obj[t] = 1
//             } else {
//                 obj[t] += 1;
//             }
//         });
//     });

//     return obj;
// }

$.getJSON("./data/cleanData.json", jsonData => {
    // console.log(typeof jsonData);
    console.log(jsonData);
    // console.log(Array.isArray(jsonData) );
    // console.log(jsonData.length);

    // var dataObj = getTopicObject(jsonData);
    // console.log(dataObj)
    // console.log(Object.keys(dataObj).length)
    // console.log(Object.entries(dataObj))
    // console.log(Object.values(dataObj))


    // calc items in 

    // set the dimensions and margins of the graph
    var margin = {
            top: 10,
            right: 20,
            bottom: 30,
            left: 50
        },
        width = 500 - margin.left - margin.right,
        height = 420 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    d3.json(cleanData, (data) => {

        // Add X axis
        var x = d3.scaleLinear()
            .domain([1800, 2020])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 6])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Add a scale for bubble size
        // var z = d3.scaleLinear()
        //     .domain([200000, 1310000000])
        //     .range([4, 40]);

        // Add a scale for bubble color
        var myColor = d3.scaleOrdinal()
            .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
            .range(d3.schemeSet2);

        // Add dots
        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return x(d.gdpPercap);
            })
            .attr("cy", function (d) {
                return y(d.lifeExp);
            })
            .attr("r", function (d) {
                return z(d.pop);
            })
            .style("fill", function (d) {
                return myColor(d.continent);
            })
            .style("opacity", "0.7")
            .attr("stroke", "white")
            .style("stroke-width", "2px")

    })

});