import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { pcdata, simpledata } from '../../../services/interfaces';
import { maincolors } from '../../../services/colors'

const PieChart = ({ width, data }: pcdata) => {
    const d3Container = useRef(null);
    useEffect(
        () => {
            if (d3Container.current) {
                const arcGen: d3.Arc<any, any> = d3.arc()
                    .innerRadius((width / 2) - (width / 10))
                    .outerRadius(width / 2);
                const angleGen = d3
                    .pie<simpledata>()
                    .value((d) => d.value)

                const piechartdata = angleGen(data)
                const mycolors: any = d3.scaleOrdinal()
                    .domain(data.map(d => d.label))
                    .range(Object.values(maincolors))
                d3.select(d3Container.current)
                    .append('g')
                    .attr('transform', 'translate(' + width / 2 + ',' + width / 2 + ')')
                    .selectAll("path")
                    .data(piechartdata)
                    .enter()
                    .append("path")
                    .attr("d", arcGen)
                    .attr("fill", mycolors);
            }
        });
    return (

        <>
            <svg height={width} width={width} ref={d3Container}></svg>
        </>
    )
}

export default PieChart