import { useEffect, useRef } from "react";
import { budgetdt } from "../../../services/interfaces";
import * as d3 from 'd3';
import './BudgetLine.css';

const datatransform = (x: budgetdt) => {
    let lineScale = d3.scaleLinear().domain([0, x.fullbudget]).range([0, x.width]);
    return {
        "spent": lineScale(x.amountspent),
        "full": x.width,
        "stroke": x.width / 20
    }
}

const BudgetLine = ({ amountspent, fullbudget, width }: budgetdt) => {
    const d3Container = useRef(null);
    const data = datatransform({ amountspent, fullbudget, width })
    useEffect(
        () => {
            if (d3Container.current) {
                const FBLine = d3.line()([[0, 0], [data.full, 0]])
                const SpentLine = d3.line()([[0, 0], [data.spent, 0]])
                //Creates the full svg
                let group = d3.select(d3Container.current)
                    .append('g')
                group.append('path')
                    .attr('d', FBLine)
                    .attr('class', 'fullbudget')
                    .attr('stroke-width', data.stroke)
                group.append('path')
                    .attr('d', SpentLine)
                    .attr('class', 'spent')
                    .attr('stroke-width', data.stroke)
            }
        }
    )
    return (
        <>
            <svg height={data.stroke} width={width} ref={d3Container}></svg>
        </>
    )
}

export default BudgetLine