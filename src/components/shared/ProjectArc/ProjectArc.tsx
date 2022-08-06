import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import "./ProjectArc.css";
import { dt } from '../../../services/interfaces';

const datatransform = (x: dt) => {
    let total = x.ending + x.running + x.proposed;
    let arcScale = d3.scaleLinear().domain([0, total]).range([-2.5, 2.5]);

    return {
        "EndingStart": arcScale(x.proposed + x.running),
        "EndingEnd": arcScale(x.proposed + x.running + x.ending),
        "RunningStart": arcScale(x.proposed),
        "RunningEnd": arcScale(x.running + x.proposed),
        "ProposedStart": -2.5,
        "ProposedEnd": arcScale(x.proposed),
        "translate": 'translate(' + x.width / 2 + ',' + x.width / 2 + ')',
        "outerradius": x.width / 2
    }
}

const ProjectArc = ({ ending, running, proposed, width, text }: dt) => {
    const d3Container = useRef(null);
    const data = datatransform({ ending, running, proposed, width, text });
    useEffect(
        () => {
            if (d3Container.current) {
                //Create circles
                const ending: d3.Arc<any, any> = d3.arc()
                    .innerRadius(data.outerradius - (width / 10))
                    .outerRadius(data.outerradius)
                    .startAngle(data.EndingStart)
                    .endAngle(data.EndingEnd);

                const running: d3.Arc<any, any> = d3.arc()
                    .innerRadius(data.outerradius - (width / 10))
                    .outerRadius(data.outerradius)
                    .startAngle(data.RunningStart)
                    .endAngle(data.RunningEnd);

                const proposed: d3.Arc<any, any> = d3.arc()
                    .innerRadius(data.outerradius - (width / 10))
                    .outerRadius(data.outerradius)
                    .startAngle(data.ProposedStart)
                    .endAngle(data.ProposedEnd);
                //Creates the full svg
                let group = d3.select(d3Container.current)
                    .append('g')
                    .attr('transform', data.translate);
                group.append('path')
                    .attr('class', 'ending')
                    .attr('d', ending);
                group.append('path')
                    .attr('class', 'running')
                    .attr('d', running);
                group.append('path')
                    .attr('class', 'proposed')
                    .attr('d', proposed)
                group.append('text')
                    .text(text)
                    .attr("class", "text")
                    .attr('text-anchor', 'middle')
                    .attr('transform','scale('+width/50+')')
                    .attr('y', -width/100)
                    .attr('y', width/50)
            }
        }
    )
    //Returns the Path values to create an Arc

    return (
        <svg width={width} height={width} ref={d3Container}></svg>
    )
}

export default ProjectArc