import React from "react";
import "./insights.scss";
import {TbDeviceDesktopAnalytics} from "react-icons/tb";
import {BsGraphUp} from "react-icons/bs";
import {GrWorkshop} from "react-icons/gr";
import {TbHandClick} from "react-icons/tb";
import {ImStatsDots} from "react-icons/im";
import {BiRupee} from "react-icons/bi";

const insight_data = [
	{
		data: "48,03,999",
		title: "Total Impression",
		icon: <TbDeviceDesktopAnalytics size={30} color={"#fff"} />,
	},
	{
		data: "80,999",
		title: "Total Engagement",
		icon: <GrWorkshop size={30} color={"#fff"} />,
	},
	{
		data: "4.10%",
		title: "Engagement Rate",
		icon: <BsGraphUp size={30} color={"#fff"} />,
	},
	{
		data: "50,03,999",
		title: "Total Clicks",
		icon: <TbHandClick size={30} color={"#fff"} />,
	},
	{
		data: "3.54%",
		title: "CTR",
		icon: <ImStatsDots size={30} color={"#fff"} />,
	},
	{
		data: "3.54%",
		title: "Spends",
		icon: <BiRupee size={30} color={"#fff"} />,
	},
];

const Insights = () => {
	return (
		<div className="insights_wrapper report_component">
			{insight_data.map((data, i) => (
				<div
					key={i}
					className={`${data.title
						.toLowerCase()
						.replace(" ", "_")} single_insight`}
				>
					<span className="icon">{data.icon}</span>
					<div className="data_title">
						<span className="data">{data.data}</span>
						<span className="title">{data.title}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Insights;
