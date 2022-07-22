import * as d3 from 'd3';

const ProjectArc = () => {
    const svg = d3.select('svg')
        .append('g');
    // const myArc = d3.arc()
    //     .innerRadius(40)
    //     .outerRadius(50)
    //     .startAngle(100)
    //     .endAngle(360);
    svg.append('circle')
        .attr('r', 5)
        .attr('cx', 6)
        .attr('cy', 6)
        .attr('fill', 'red');
    // svg.append('path')
    //     .attr('d', myArc)
    return (
        <svg></svg>
    )
}

export default ProjectArc