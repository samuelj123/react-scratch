import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import "./ProjectArc.css"

interface dt {
    "Ending": number;
    "Running": number;
    "Proposed": number;
}

const datatransform = (x: dt) => {
    let total = x.Ending + x.Running + x.Proposed;
    let arcScale = d3.scaleLinear().domain([0, total]).range([-2.5, 2.5]);
    return {
        "EndingStart": arcScale(x.Proposed + x.Running),
        "EndingEnd": arcScale(x.Proposed + x.Running + x.Ending),
        "RunningStart": arcScale(x.Proposed),
        "RunningEnd": arcScale(x.Running + x.Proposed),
        "ProposedStart": -2.5,
        "ProposedEnd": arcScale(x.Proposed)
    }
}

const ProjectArc = () => {
    const d3Container = useRef(null);
    const input_data: dt = { "Ending": 5, "Running": 40, "Proposed": 3 };
    const data = datatransform(input_data);
    useEffect(
        () => {
            if (d3Container.current) {
                const ending: d3.Arc<any, any> = d3.arc()
                    .innerRadius(60)
                    .outerRadius(80)
                    .startAngle(data.EndingStart)
                    .endAngle(data.EndingEnd);

                const running: d3.Arc<any, any> = d3.arc()
                    .innerRadius(60)
                    .outerRadius(80)
                    .startAngle(data.RunningStart)
                    .endAngle(data.RunningEnd);

                const proposed: d3.Arc<any, any> = d3.arc()
                    .innerRadius(60)
                    .outerRadius(80)
                    .startAngle(data.ProposedStart)
                    .endAngle(data.ProposedEnd);
                //Creates the full svg
                let group = d3.select(d3Container.current)
                    .append('g')
                    .attr('transform', 'translate(125,125)');
                group.append('path')
                    .attr('class', 'ending')
                    .attr('d', ending);
                group.append('path')
                    .attr('class', 'running')
                    .attr('d', running);
                group.append('path')
                    .attr('class', 'proposed')
                    .attr('d', proposed)
            }
        }
    )
    //Returns the Path values to create an Arc

    return (
        <svg width="250" height="250" ref={d3Container}></svg>
    )
}

export default ProjectArc