import * as d3 from 'd3';
import './Map.css'
import { useEffect, useRef } from 'react';

// Request Map

const Map = () => {
    const d3Container = useRef(null);
    const width = 500;
    useEffect(() => {

        let projection = d3.geoEquirectangular()
            .translate([width * 1.5 * -1, width * 1.05])
            .scale(width * 1.45);
        let geoGenerator = d3.geoPath()
            .projection(projection);

        const afun = async () => {
            let dta: any = {}
            const map = d3.select(d3Container.current)
                .attr('class', 'map')
            await d3.json('https://gist.githubusercontent.com/samuelj123/48cca3d9cee449cc1284765f410b461b/raw/a2a80555dd3463379651943eaee974db98ae9d13/geojson%2520file')
                .then(d => { if (d instanceof Object) { dta = d } })
                .catch(err => console.log(err));
            console.log(dta);
            map.selectAll('path')
                .data(dta.features)
                .join('path')
                .attr('d', geoGenerator(dta))
                .attr('class', 'mappath')
        }
        afun()





    })
    return (
        <><svg width={width} height={width} ref={d3Container}></svg></>
    )
}

export default Map