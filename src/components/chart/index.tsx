import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './style.css';
import { ChartGroup } from '@/types/CardType';

type BarChartPropTypes = {
	data: any;
	color: string;
	showFullYear: boolean;
	impactUnit: string;
	chartGroup: ChartGroup;
};

const BarChart = ({
	data,
	color,
	showFullYear,
	impactUnit,
	chartGroup,
}: BarChartPropTypes) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const barXOffset = 20;
	const w = 170;
	const h = 200;
	useEffect(() => {
		// Remove old SVG content
		d3.select(svgRef.current).selectAll('*').remove();
		const svg = d3
			.select(svgRef.current!)
			.attr('width', w)
			.attr('height', h)
			.style('overflow', 'visible')
			.style('margin-top', '40px')
			.style('margin-left', '35px')
			.style('fill', color);

		let minYValue: number;
		let maxYValue: number;
		if (chartGroup === 'b') {
			minYValue = -Math.max(...data.map(Math.abs)) * 1.3;
			maxYValue = Math.max(...data.map(Math.abs)) * 1.3;
		} else {
			minYValue = 0;
			(maxYValue =
				showFullYear && impactUnit === 'M3'
					? Math.max(...data) * 1.3
					: Math.max(...data) * 1.3),
				1;
		}

		// Setup X/Y Scale
		const xScale = d3
			.scaleBand()
			.domain(data.map((_: number, i: number) => i))
			.range([0, w])
			.padding(0.475);
		const yScale = d3
			.scaleLinear()
			.domain([minYValue, maxYValue])
			.range([h, 40]);

		// Axes
		const xAxis = d3.axisBottom(xScale).ticks(0);
		const yAxis = d3
			.axisLeft(yScale)
			.tickFormat(
				(d: any) =>
					`${
						impactUnit == 'Tons' ? `${d.toFixed(1)} T` : `${d} ${impactUnit}`
					} `
			);

		svg
			.append('g')
			.call(xAxis)
			.attr('transform', `translate(24, ${yScale(0)})`)
			.style('color', '#d8d8d8')
			.selectAll('.tick')
			.remove();

		svg
			.append('g')
			.call(yAxis)
			.style('color', '#515b6b')
			.style('font-weight', 'bold')
			.attr('class', 'y-axis')
			.attr('transform', 'translate(30, 0)');

		showFullYear &&
			svg
				.append('text')
				.attr('x', -150)
				.attr('y', 185)
				.text('FULL YEAR')
				.attr('transform', 'rotate(-90)')
				.attr('fill', '#515b6b')
				.attr('letter-spacing', '2.2px')
				.attr('font-size', '10px');

		const singleBarData = showFullYear ? data : [data[0]];

		// Add text labels on top of bars
		svg
			.selectAll('.bar-label')
			.data(singleBarData)
			.join('foreignObject')
			.attr('class', 'bar-label')
			.attr('x', (_: any, i: any) => (xScale(i) as any) + 9)
			.attr('y', (d) => yScale(Math.min(d as number, maxYValue)) - 50)
			.attr('y', (d: any) => {
				if (chartGroup === 'b' && d < 0) {
					return yScale(0) - 50;
				}
				return yScale(Math.min(d as number, maxYValue)) - 50;
			})
			.attr('width', 60)
			.attr('height', 45.5)
			.html(
				(d: any) => `<div class="label-div">
					<p>${d.toFixed(1)}</p>
					<p>${impactUnit}</p>
					<div class="pointer"></div>
			</div>`
			);

		svg
			.selectAll('.bar')
			.data(singleBarData)
			.join('rect')
			.attr('x', (_: any, i: any) => (xScale(i) as any) + barXOffset)
			.attr('y', (d: any) => {
				if (chartGroup === 'b' && d < 0) {
					return yScale(0);
				}
				return yScale(Math.min(d as number, maxYValue));
			})
			.attr('width', xScale.bandwidth())
			.attr('height', (val: any) => {
				if (chartGroup === 'b') {
					return Math.abs(yScale(0) - yScale(val));
				} else {
					return Math.abs(yScale(val) - yScale(0));
				}
			})
			.attr('stroke', (_, i) => (i === 0 ? 'none' : color))
			.attr('fill', (_, i) => (i === 0 ? '' : 'none'));
	}, [data]);

	return <svg ref={svgRef}></svg>;
};

export default BarChart;
