import * as d3 from 'd3';
import './Map.css'
import { useEffect, useRef } from 'react';

// Request Map

const Map = () => {
    const d3Container = useRef(null);
    const width = 500;
    const height = width;
    useEffect(() => {
        let geodata: any;
        let projection = d3.geoEquirectangular()
            .translate([width * 1.5 * -1, height * 1.05])
            .scale(width * 1.45);
        let geoGenerator = d3.geoPath()
            .projection(projection);
        d3.json('https://gist.githubusercontent.com/samuelj123/4a9564d946fa7a062460fd7ba93c7a31/raw/3c3aaaeb9d9e9779e8f00024fc6913ddec3be9ef/GeoJson')
            .then(d => { if (d instanceof Object) { created3map(d) } })
            .catch(err => console.error(err))

        const created3map = (data: any) => {
            geodata = data;
            d3.select(d3Container.current)
                .attr('class', 'map')
                .selectAll('path')
                .data(geodata.features)
                .join('path')
                .attr('d', geoGenerator(geodata))
                .attr('class', 'mappath')
                .on('mouseover', function (d, i) {
                    d3.select(this).transition()
                        .attr('stroke-width', '3px')
                })
        }

    })
    return (
        <><svg width={width} height={height} ref={d3Container}></svg></>
    )
}

// export default Map