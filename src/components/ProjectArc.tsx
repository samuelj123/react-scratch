import * as d3 from 'd3';

const ProjectArc = () => {
    const svg = d3.select('svg')
        // .attr('className', 'arc')
        .append('g');
    const myArc: d3.Arc<any, any> = d3.arc()
        .innerRadius(40)
        .outerRadius(50)
        .startAngle(100)
        .endAngle(360);
    svg.append('path')
        .attr('d', myArc)
    return (
        <svg></svg>
    )
}

export default ProjectArc