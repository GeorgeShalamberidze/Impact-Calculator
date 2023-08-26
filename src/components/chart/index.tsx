import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type BarChartPropTypes = {
	data: any;
	color: string;
	showFullYear: boolean;
};

const BarChart = ({ data, color, showFullYear }: BarChartPropTypes) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		// Remove old SVG content
		d3.select(svgRef.current).selectAll('*').remove();

		// Setup SVG Container
		const w = 194;
		const h = 200;

		const svg = d3
			.select(svgRef.current!)
			.attr('width', w)
			.attr('height', h)
			.style('overflow', 'hidden')
			.style('margin-top', '35px')
			.style('margin-left', '35px')
			.style('fill', color);

		showFullYear &&
			svg
				.append('text')
				.attr('x', -150)
				.attr('y', 175)
				.text('FULL YEAR')
				.attr('transform', 'rotate(-90)')
				.attr('fill', '#515b6b')
				.attr('letter-spacing', '2.2px')
				.attr('font-size', '10px');

		// Setup X/Y Scale
		const xScale = d3
			.scaleBand()
			.domain(data.map((_: number, i: number) => i))
			.range([0, w])
			.padding(0.5);
		const yScale = d3.scaleLinear().domain([0, h]).range([h, 40]); // Y axis

		// Axes
		const xAxis = d3.axisBottom(xScale).ticks(data.length);
		const yAxis = d3.axisLeft(yScale);

		svg
			.append('g')
			.call(xAxis)
			.attr('transform', `translate(0, ${h})`)
			.style('color', '#d8d8d8');
		svg.append('g').call(yAxis).style('color', '#d8d8d8');

		svg
			.selectAll('.bar')
			.data(data)
			.join('rect')
			.attr('x', (_: any, i: any) => xScale(i) as any)
			.attr('y', (d) => yScale(Math.min(d as number, 180)))
			.attr('width', xScale.bandwidth())
			.attr('height', (val: any) => h - yScale(val))
			.attr('stroke', (_, i) => (i === 0 ? 'none' : color))
			.attr('fill', (_, i) => (i === 0 ? '' : 'none'));
	}, [data]);

	return <svg ref={svgRef}></svg>;
};

export default BarChart;
