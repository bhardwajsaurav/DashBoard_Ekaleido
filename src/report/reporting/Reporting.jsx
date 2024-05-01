import React, { useEffect, useState } from "react";
import "./Reporting.css";
import Head from "./head/Head";
import Table from "./table/Table";
import Gender from "./gender/Gender";
import Devices from "./devices/Devices";
import IEEAGraph from "./IEEA/IEEAGraph2";
import Insights from "./insights/Insights";
import AgeCharts from "./ageCharts/AgeCharts";
// import States from "./states/States";
import { ListingUploadCampaigns, NewLineItems, getAdserver, getDbm } from "../../Apis";

const Reporting = ({ ServerSelect,setServerSelect }) => {
	// var currentDate = new Date();
	// var year = currentDate.getFullYear();
	// var month = currentDate.getMonth();
	// var day = currentDate.getDate();


	const [datepicker, setDatePicker] = useState({
		start_date: "30-04-2023",
		end_date: "30-04-2024",
	})
	const [age, setAge] = React.useState('');

	const [adserverdata, setAdserverData] = useState()
	const [dbm, setDbm] = useState()
	const [newCampData, setNewCampData] = useState()
	const [dataNewL, setDataNewL] = useState(0)
	const [idGeter,setGeter] = useState()
	


	useEffect(() => {
		fetchData()
		fetchDataNew()
		
	}, [ServerSelect,datepicker,age])



	

	async function fetchData() {
		try {
			let advertiser = await getAdserver(datepicker.start_date, datepicker.end_date);
			let dbm = await getDbm(datepicker.start_date, datepicker.end_date);
			setAdserverData(advertiser?.data)
			setDbm(dbm?.data)
		} catch (error) {
			console.log("")
		}

	}

	async function fetchDataNew() {
		let newCamp = await ListingUploadCampaigns(datepicker.start_date, datepicker.end_date);
		setNewCampData(newCamp?.data?.data)
	}

	

   
	
	return (
		<>
			<div className="report_wrapper">

				<Head setDatePicker={setDatePicker} datepicker={datepicker} fetchData={fetchData} fetchDataNew={fetchDataNew} setAge={setAge} age={age}/>
				{/* <Insights />
			<IEEAGraph /> */}
				<Table  datepicker={datepicker} setServerSelect={setServerSelect} adserverdata={adserverdata} dbm={dbm} ServerSelect={ServerSelect} newCampData={newCampData} setAdserverData ={setAdserverData} dataNewL={dataNewL} setDataNewL={setDataNewL} setNewCampData={setNewCampData}/>

				{/* <Gender />
			<AgeCharts />
			<Devices />
			<States />  */}
			</div>


		</>



	);
};

export default Reporting;
