import "./Devices.css";
import Chart from "chart.js/auto";
import React, {useEffect, useRef} from "react";

const Devices = () => {
	const graphref = useRef();

	useEffect(() => {
		const myChart2 = new Chart(graphref.current, {
			type: "bar",
			data: {
				labels: ["Mobile", "Desktop", "Tablets"],
				datasets: [
					{
						label: "Impression",
						data: [1000, 100, 300],
						backgroundColor: ["rgba(255, 99, 132, 0.2)"],
						borderColor: ["rgba(255, 99, 132, 1)"],
						borderWidth: 1,
					},
					{
						label: "Engagements",
						data: [500, 200, 50],
						backgroundColor: ["rgba(255, 219, 0, 0.7)"],
						borderColor: ["rgba(100, 99, 132, 1)"],
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});

		return ()=>{
			myChart2.destroy();
		}
	}, []);

	return (
		<div className="device_wrapper report_component">
			<div className="head">
				<h4 className="component_name">Devices</h4>
			</div>
			<div className="bar_wrapper">
				<canvas ref={graphref} id="deviceChart"></canvas>
			</div>
		</div>
	);
};

export default Devices;
