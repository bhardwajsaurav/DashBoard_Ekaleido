import "./IEEAGraph.css";
import React, {useState} from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "2022-02-10",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "2022-02-11",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "2022-02-12",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "2022-02-13",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "2022-02-14",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "2022-02-15",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "2022-02-16",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const IEEAGraph = () => {
	const [activeOption, setActiveOptions] = useState("impression");

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
			<div className="ieea_map_wrapper">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 100,
							left: 50,
							bottom: 50,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis
							label={{value: "Engagement", position: "left", angle: -90}}
						/>
						<Tooltip />
						<Legend />
						<Bar dataKey="pv" fill="#8884d8" />
						<Bar dataKey="uv" fill="#82ca9d" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default IEEAGraph;
