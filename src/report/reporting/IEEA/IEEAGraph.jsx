import "./IEEAGraph.css";
import React, {useEffect, useState, useRef} from "react";
import Chart from "chart.js/auto";

const IEEAGraph = () => {
	const Graphref = useRef();
	const [activeOption, setActiveOptions] = useState("impression");
	const [chartData, setChartData] = useState();

	useEffect(() => {
		const myChart = new Chart(Graphref.current, {
			type: "line",
			data: {
				datasets: [
					{
						label: "test",
						tension: 0.4,
						data: [
							{x: "2022-02-10", y: 10},
							{x: "2022-02-11", y: 19},
							{x: "2022-02-12", y: 13},
							{x: "2022-02-13", y: 12},
							{x: "2022-02-14", y: 8},
							{x: "2022-02-15", y: 10},
							{x: "2022-02-16", y: 20},
							{x: "2022-02-19", y: 10},
							{x: "2022-02-20", y: 19},
							{x: "2022-02-21", y: 13},
							{x: "2022-02-22", y: 12},
							{x: "2022-02-23", y: 8},
							{x: "2022-02-24", y: 10},
							{x: "2022-02-25", y: 20},
						],
						backgroundColor: ["#ffd9d9"],
						borderColor: ["#ffd9d9"],
						borderWidth: 1,
						stack: "combined",
					},
					{
						type: "bar",
						label: "Impressions",
						data: [
							{x: "2022-02-10", y: 10},
							{x: "2022-02-11", y: 19},
							{x: "2022-02-12", y: 13},
							{x: "2022-02-13", y: 12},
							{x: "2022-02-14", y: 8},
							{x: "2022-02-15", y: 10},
							{x: "2022-02-16", y: 20},
							{x: "2022-02-19", y: 10},
							{x: "2022-02-20", y: 19},
							{x: "2022-02-21", y: 13},
							{x: "2022-02-22", y: 12},
							{x: "2022-02-23", y: 8},
							{x: "2022-02-24", y: 10},
							{x: "2022-02-25", y: 20},
						],
						backgroundColor: ["#d9faff"],
						borderColor: ["#B3EDFF"],
						borderWidth: 3,
					},
				],
			},
			options: {
				responsive: true,
				devicePixelRatio: 1,
				maintainAspectRatio: true,
				aspectRatio: 2,
				plugins: {
					legend: {
						title: {
							display: true,
							text: "Heading",
							font: {
								weight: "bold",
								size: 24,
							},
						},
						labels: {
							font: {
								size: 20,
							},
						},
					},
				},
				scales: {
					y: {
						type: "linear",
						display: true,
						position: "left",
						title: {
							display: true,
							text: "Impressions",
							color: "#911",
							font: {
								size: 20,
								weight: "bold",
							},
						},
					},
					y1: {
						type: "linear",
						display: true,
						position: "right",
						grid: {
							drawOnChartArea: false,
						},
					},
					x: {
						display: true,
						title: {
							display: true,
							text: "Time",
							color: "#000",
							font: {
								size: 20,
							},
						},
					},
				},
			},
		});
		Promise.all([myChart]).then(setChartData(myChart));
	}, []);

	const handleChartOptions = (e) => {
		setActiveOptions(e.target.value);
	};

	return (
		<div className="ieea_wrapper report_component">
			<div className="input_options" onChange={handleChartOptions}>
				<div
					className={`input_group ${
						activeOption === "impression" ? "active" : ""
					}`}
				>
					<input
						id="impression"
						type="radio"
						name="chart_option"
						value="impression"
					/>
					<label htmlFor="impression">Impression</label>
				</div>
				<div
					className={`input_group ${
						activeOption === "engagement" ? "active" : ""
					}`}
				>
					<input
						id="engagement"
						type="radio"
						name="chart_option"
						value="engagement"
					/>
					<label htmlFor="engagement">Engagement</label>
				</div>
				<div
					className={`input_group ${
						activeOption === "etr" ? "active" : ""
					}`}
				>
					<input id="etr" type="radio" name="chart_option" value="etr" />
					<label htmlFor="etr">ETR%</label>
				</div>
				<div
					className={`input_group ${
						activeOption === "amount" ? "active" : ""
					}`}
				>
					<input
						id="amount"
						type="radio"
						name="chart_option"
						value="amount"
					/>
					<label htmlFor="amount">Amount</label>
				</div>
			</div>
			<canvas ref={Graphref} id="myChart" width="400" height="100"></canvas>
		</div>
	);
};

export default IEEAGraph;
