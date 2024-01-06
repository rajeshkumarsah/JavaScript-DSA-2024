 // Bar Chart Function
 function createBarChart() {
    const data = [
      { gender: "Female", count: 500 },
      { gender: "Male", count: 700 },
      { gender: "Not Specified", count: 200 },
    ];
  
    const svg = d3.select("#bar-chart");
  
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
  
    // Create Scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.gender))
      .range([margin.left, width + margin.left])
      .padding(0.1);
  
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count)])
      .range([height + margin.top, margin.top]);
  
    // Add Bars to SVG
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", (d) => `bar ${d.gender.toLowerCase().replace(" ", "-")}`)
      .attr("x", (d) => xScale(d.gender))
      .attr("y", (d) => yScale(d.count))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height + margin.top - yScale(d.count));
  
    // Add Axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height + margin.top})`)
      .call(d3.axisBottom(xScale));
  
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));
  }
  
  // Call Functions to Create Charts
  
  createBarChart();
  