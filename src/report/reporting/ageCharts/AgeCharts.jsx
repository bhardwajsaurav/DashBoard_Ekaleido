import "./AgeCharts.css";
import React, {useEffect, useRef} from "react";
import Chart from "chart.js/auto";
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
} from "reactstrap";

const AgeCharts = () => {
	const Graphref = useRef();
	useEffect(() => {
		const myChart1 = new Chart(Graphref.current, {
			type: "line",
			data: {
				datasets: [
					{
						label: "test",
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
						backgroundColor: ["#F05446"],
						borderColor: ["#F05446"],
						borderWidth: 4,
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
						backgroundColor: ["#8994F0", "#7CC5F0", "#F0D165", "#71F0DA"],
						borderColor: ["#8994F0", "#7CC5F0", "#F0D165", "#71F0DA"],
						borderWidth: 1,
					},
				],
			},
			options: {
				devicePixelRatio: 2,
			},
		});

		return ()=>{
			myChart1.destroy();
		}
	}, []);
	return (
		<div className="age_wrapper report_component">
			<div className="head">
				<h4 className="component_name">Age</h4>
				<UncontrolledDropdown className="nav_btn export">
					<DropdownToggle caret>EXPORT</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>PDF</DropdownItem>
						<DropdownItem>JPG</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
			</div>
			<div className="bar_wrapper">
				<canvas ref={Graphref} id="myChart"></canvas>
			</div>
		</div>
	);
};

export default AgeCharts;
