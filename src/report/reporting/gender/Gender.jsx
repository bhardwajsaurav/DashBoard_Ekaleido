import "./gender.css";
import React, {useState, useEffect, useRef} from "react";
import Chart from "chart.js/auto";

const ImpressionData = {
	labels: ["Male", "Female", "Others"],
	datasets: [
		{
			label: "Impression",
			data: [100, 20, 200],
			backgroundColor: [
				"rgb(255, 99, 132)",
				"rgb(54, 162, 235)",
				"rgb(255, 205, 86)",
			],
			hoverOffset: 4,
		},
	],
};

const EngagementData = {
	labels: ["Male", "Female", "Others"],
	datasets: [
		{
			label: "Impression",
			data: [300, 50, 100],
			backgroundColor: [
				"rgb(255, 99, 132)",
				"rgb(54, 162, 235)",
				"rgb(255, 205, 86)",
			],
			hoverOffset: 4,
		},
	],
};
const Gender = () => {
	const chartRef = useRef();
	const [chartData, setChartData] = useState([]);
	const [graphType, setGraphType] = useState(true);

	useEffect(() => {
		const myChart = new Chart(chartRef.current, {
			type: "doughnut",
			data: {
				labels: ["Male", "Female", "Others"],
				datasets: [
					{
						label: "Impression",
						data: [100, 20, 200],
						backgroundColor: [
							"rgb(255, 99, 132)",
							"rgb(54, 162, 235)",
							"rgb(255, 205, 86)",
						],
						hoverOffset: 4,
					},
				],
			},
			options: {
				responsive: true,
				plugins: {
					title: {
						display: true,
						text: "Impressions",
					},
					subtitle: {
						display: true,
						text: "Custom Chart Subtitle",
					},
					legend: {
						position: "right",
					},
				},
			},
		});
		Promise.all([myChart]).then(setChartData(myChart));

		return()=>{
			myChart.destroy();
		}

	}, []);

	function handleSwitch(e) {
		setGraphType(e.target.checked);
		if (e.target.checked) {
			chartData.data = ImpressionData;
			chartData.options.plugins.title.text = "Impressions";
		} else {
			chartData.data = EngagementData;
			chartData.options.plugins.title.text = "Engagements";
		}
		chartData.update();
	}

	return (
		<div className="gender_wrapper report_component">
			<div className="head"	>
				<h4 className="component_name">
					Gender<span>({graphType ? "Impression" : "Engagement"})</span>
				</h4>
				<input
					className="switch round"
					defaultChecked={graphType}
					onChange={handleSwitch}
					type="checkbox"
				></input>
			</div>

			<div className="donut_wrapper">
				<canvas
					ref={chartRef}
					id="myChart"
					width="100%"
					height="100%"
				></canvas>
			</div>
		</div>
	);
};

export default Gender;
