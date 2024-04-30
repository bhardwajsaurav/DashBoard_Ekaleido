import Button from '@mui/material/Button';
import "./head.scss";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SlCalender } from "react-icons/sl";

const Head = ({ setDatePicker, datepicker, fetchData, fetchDataNew }) => {
	const [age, setAge] = React.useState('');
	const [clickCheck, setClickCheck] = React.useState(true);
	const handleChange = (event) => {

		setAge(event.target.value && event.target.value);
		setClickCheck(event.target.value)

		if (event.target.value === "Today") {
			setDatePicker({
				start_date: "09-04-2024",
				end_date: "09-04-2024",
			});
		}

		if (event.target.value === "Yesterday") {
			setDatePicker({
				start_date: "08-04-2024",
				end_date: "09-04-2024",

			});
		}
		if (event.target.value === "Last 7 Days") {
			setDatePicker({
				start_date: "03-04-2024",
				end_date: "09-04-2024",

			});
		}
		if (event.target.value === "Last 14 Days") {
			setDatePicker({
				start_date: "25-03-2024",
				end_date: "09-04-2024",
			});
		}
		if (event.target.value === "Last 30 Days") {
			setDatePicker({
				start_date: "09-03-2024",
				end_date: "09-04-2024",

			});
		}
		if (event.target.value === "Lst") {
			setDatePicker({
				start_date: "24-01-2023",
				end_date: "24-04-2024",

			});
		}

	};


	return (
		<>
			<div className="head_wrapper">
				{/* <div className="campaign_name report_component">
					<span className="text">AMD </span>
					<span className="icon">&gt;</span>
					<span className="text"> AMD Consumer June-July’22 </span>
					<span className="icon">&gt;</span>
					<span className="text"> TVA Campaigns</span>
				</div> */}
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Date</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="Age"
						onChange={handleChange}
					>   <MenuItem value={"Today"}>Today</MenuItem>
						<MenuItem value={"Yesterday"}>Yesterday</MenuItem>
						<MenuItem value={"Last 7 Days"}>Last 7 Days</MenuItem>
						<MenuItem value={"Last 14 Days"}>Last 14 Days</MenuItem>
						<MenuItem value={"Last 30 Days"}>Last 30 Days</MenuItem>
						<MenuItem value={"Lst"}>Last Year</MenuItem>
					</Select>
				</FormControl>
				<div className="date_wrapper report_component d-flex justify-content-around align-items-center">
					<input style={{ display: clickCheck ? "none" : "block" }} type="date" name="start_date" value={datepicker.start_date} onChange={e => { setDatePicker({ ...datepicker, [e.target.name]: e.target.value }) }} />

					<span style={{ display: clickCheck ? "block" : "none" }} onClick={() => { setClickCheck(false) }}>{datepicker.start_date} <SlCalender className='ms-1 calenderIcon' /></span>

					<span>to</span>

					<span style={{ display: clickCheck ? "block" : "none" }} onClick={() => { setClickCheck(false) }}>{datepicker.end_date} <SlCalender className='ms-1 calenderIcon'/></span>

					<input type="date" style={{ display: clickCheck ? "none" : "block" }} name="end_date" value={datepicker.end_date} onChange={e => { setDatePicker({ ...datepicker, [e.target.name]: e.target.value }) }} />

				</div>


			</div>
			<div className="text-right my-4">
				<Button variant="contained" onClick={() => {
					fetchData()
					fetchDataNew()
				}}>Submit</Button>
			</div>
		</>


	);
};

export default Head;
