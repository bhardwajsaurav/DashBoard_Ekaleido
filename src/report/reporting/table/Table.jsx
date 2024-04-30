import "./table.css";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import ModalpopUp from "../POP/Modalpop";
import NewCamps from "../POP/NewCamps";
import { Mapped, NewLineItems, Preview, UpdateRatio, getAdLineItems } from "../../../Apis";
import SaveModal from "../savemodal/SaveModal";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import Iconpage from "./Iconpage";
import CampInner from "./CampInner";
import WrapperTable from "./WrapperTable";
import Button from '@mui/material/Button';
import Accordion3 from "./Accordion3";







export function NewCampLineItems({ dataNewL, id ,DataCtr,ctrValCon,setCtrValCon,setDataCtr}) {
	
	let  singleCheck = (e,id,index)=>{
        let val = []
         if(e.target.checked === true){
            let data2 = dataNewL?.data?.[id]?.filter((elem) => {
                if(elem.campaign_id === id){
                  
                    elem["checkbox"] = true
                    ctrValCon.push(elem.campaign_id)
                    setCtrValCon(ctrValCon)
                    return elem
                }
                
            })
            setDataCtr(data2)
         }
         else{
            let data2 = dataNewL?.data?.[id]?.filter((elem) => {
                if(elem.campaign_id === id){
                    elem["checkbox"] = false
                    ctrValCon[index] = ""
                   
                    setCtrValCon(ctrValCon)
                    return elem
                }
                
            })
            setDataCtr(data2)
         }

    }

	return (
		<>
			{
				(DataCtr ? DataCtr : dataNewL?.data?.[id])?.map((elem, index) => {
					return (
						<div className="accordionCustom mb-2">

							{/* <Iconpage /> */}


							<div className="numNo">
								<p className="mb-0" style={{ "fontSize": "10px" }}>S.no:{index}</p>
							</div>
							<div className="checkwid position-relative">
								<label for="" class="relative">
									<input type="checkbox" checked={elem?.checkbox} name="ad" onClick={(e)=>{
										singleCheck(e,elem.campaign_id,index)
									}} />
									<span class="checkmark"></span></label>
							</div>


							<div style={{ "fontSize": "10px" }}>
								{elem?.advertiser_name}
							</div>

							<div style={{ "fontSize": "10px" }}>
								{elem?.campaign_name}
							</div>
							<div style={{ "fontSize": "10px" }}> {elem?.insertion_order}</div>
							<div style={{ "fontSize": "10px" }}> {elem?.impressions}</div>
							<div style={{ "fontSize": "10px" }}> {elem?.clicks}</div>
							<div style={{ "fontSize": "10px" }}> {elem?.line_item}</div>
							<div style={{ "fontSize": "10px" }}>
								{elem?.CTR}
							</div>
							<div className="me-2" style={{ "fontSize": "10px" }}>
								{elem?.CPC}
							</div>
						</div>
					)
				})
			}
		</>
	)

}

export function InnerCTR({ capcha, campRatio, id, toggle, dataNewL, elem, index ,setCtrValCon,ctrValCon}) {
	const [DataCtr, setDataCtr] = useState()
	const linecheck = (e) => {
		let val = []

		if (e.target.checked) {

			let data2 = dataNewL?.data?.[id]?.filter((elem) => {
				elem["checkbox"] = true
				val.push(elem.campaign_id)
				setCtrValCon(val)
				return elem
			})
			setDataCtr(data2)
		}

		else {
			let data2 = dataNewL?.data?.[id]?.filter((elem) => {
				elem["checkbox"] = false
				let arr = [];
				setCtrValCon(arr)
				return elem
			})
			setDataCtr(data2)
		}
	}



	return (
		<>
			<div className="accordionCustom mb-2">
				<Accordion3 capcha={capcha} campRatio={campRatio} id={id} />
				<div className="numNo">
					<p className="mb-0">S.no:{index}</p>
				</div>
				<div className="checkwid position-relative">
					<label for="" class="relative"><input type="checkbox" name="ad" onClick={(e)=>{
						linecheck(e)
					}}/><span class="checkmark"></span></label>
				</div>
				<div className="namewid">
					{elem?.campaign_name}
				</div>
			</div>

			<div className="p-3" style={{ display: (toggle ? "block" : "none") }}>
				<NewCampLineItems dataNewL={dataNewL} id={id} DataCtr={DataCtr} ctrValCon={ctrValCon} setCtrValCon={setCtrValCon} setDataCtr={setDataCtr}/>
			</div>
		</>
	)

}

const Table = ({ datepicker, adserverdata, dbm, ServerSelect, setAdserverData, setServerSelect, newCampData, dataNewL, setDataNewL }) => {
	const [dataContainer, setDataContainer] = useState([])
	const [dataContainer2, setDataContainer2] = useState([])
	const [back, setBack] = useState()
	const [Name, setName] = useState()
	const [toggle, setToogle] = useState(false)
	const [idGeter, setGeter] = useState()
	const [CtrValue,setCtrValue] = useState({})
	const [CpcValue,setCpcValue] = useState({})
	const [CampaingnId, setCampaingnId] = useState()
	const [Priview, setPriview] = useState()
	const [PriviewData,setPriviewData] = useState()
	const [ctrValCon, setCtrValCon] = useState()
	console.log(dataContainer,dataContainer2,"[]]]]]]]]]]]]]]]")

	async function MappingSave() {
		const payLoad =
			{ "dbm": dataContainer2, "adserver": dataContainer, "new_campaign": Name, "start_date": datepicker.start_date, "end_date": datepicker.end_date }
		const data = await Mapped(payLoad)
		if (data?.status === 200) {
			setServerSelect("status")
			setTimeout(() => {
				window.location.reload()
			})
		}
	}

	async function campRatio(id) {
		setCampaingnId(id)
		let newCamp = await NewLineItems(datepicker.start_date, datepicker.end_date, id);
		setDataNewL(newCamp?.data)
	}

	const UpdateRatioFun = async () => {
	
		let objdata = {
			"campaign_id": CampaingnId,
			"start_date": datepicker.start_date,
			"end_date": datepicker.end_date,
			"lineitem_id_list": [
				{
					"ratio": { "ctr": CtrValue, "cpc": CpcValue },
					"lineitem_id": CampaingnId,
				},
			]
		}
		console.log(objdata)
		if ((CtrValue.ctrMax && CtrValue.ctrmin) && (CpcValue.cpcmax && CpcValue.cpcmin)) {
			let data = await UpdateRatio(objdata)
			setPriview(data)
		}

	}

	
    const  PreviewHandle = async()=>{
        let data = await Preview()
		setPriviewData(data?.data)
        
    }



	return (
		<>

			<div style={{ display: (ServerSelect === "s1" ? "block" : "none") }}>
				{	adserverdata ? 
					adserverdata?.map((elem, index) => {
						return (
							<>
								<WrapperTable elem={elem} index={index} setDataContainer={setDataContainer} dataContainer={dataContainer} />
							</>
						)
					}
					)
					: <h5>Data Not found</h5>
				}
			</div>
			<div style={{ display: (ServerSelect === "s2" ? "block" : "none") }}>

				{
					 dbm?
					dbm?.map((elem, index) => {
						return (
							<>
								<WrapperTable elem={elem} index={index} setDataContainer2={setDataContainer2} dataContainer2={dataContainer2} />
							</>
						)
					}
					) 
					: <h5>Data Not found</h5>
				}
			</div>


				{ ctrValCon&&
						<div className="mb-5">
						<h6 className="mb-3">Click to Engagement Engagement Ratio</h6>
						<div >
						<div className="mb-3">
						   <input type="text"  className="me-3" name= "ctrMax"  onChange={(e)=>{setCtrValue({...CtrValue , [e.target.name]: e.target.value})}}/>
						   <input type="text" name="ctrmin" onChange={(e)=>{setCtrValue({...CtrValue , [e.target.name]: e.target.value})}} />
						</div>
						<div className="mb-3">
						   <input type="text" name="cpcmax" className="me-3" onChange={(e)=>{setCpcValue({...CpcValue , [e.target.name]: e.target.value})}} />
						   <input type="text" name="cpcmin" onChange={(e)=>{setCpcValue({...CpcValue , [e.target.name]: e.target.value})}}  />
						</div>
	   
						<div>
						<Button variant="contained" className="me-3"  onClick={() => { UpdateRatioFun() }}>Submit</Button>
						{
									   Priview && <Button variant="contained" onClick={()=>{
										PreviewHandle()
									   }}>Priview</Button>
								   }
	   
						</div>
						</div>
					   
				   </div>
				}
		

			<div style={{ display: (ServerSelect === "new" ? "block" : "none") }}>
				{ newCampData ? 
					newCampData?.map((elem, index) => {
						return (
							<>
								<InnerCTR capcha={setToogle} campRatio={campRatio} id={elem.campaign_id} toggle={toggle} dataNewL={dataNewL} elem={elem} index={index} setCtrValCon={setCtrValCon} ctrValCon={ctrValCon}/>


							</>
						)
					}) : <h5>Data Not found</h5>
				}
			</div>

		


			<div className="mt-4" style={{ display: (ServerSelect === "s3" ? "block" : "none") }}>
				<label htmlFor="" className="mb-2">Campaingn Name</label>
				<br />
				<input type="text" className="p-2 me-4" onChange={(e) => { setName(e.target.value) }} />
				<Button variant="contained" onClick={() => { MappingSave() }}>Submit</Button>
				

			</div>


			<div className="my-4 text-success" style={{ display: (ServerSelect === "status" ? "block" : "none") }}>
				<h5>Succefully Update Your Mapping</h5>
			</div>
			<div className="mt-3">
				{
					back && <Button variant="contained" className="me-3" onClick={() => { setServerSelect("s1") }}>
						Back
					</Button>
				}

				{
					ServerSelect === "s2" && dataContainer2.length > 0 ? <Button variant="contained" onClick={() => {
						setServerSelect("s3")
						setBack(true)
					}}>
						Next
					</Button> :
						dataContainer.length > 0 && <Button variant="contained" onClick={() => {
							setServerSelect("s2")

							setBack(true)
						}}>
							Next
						</Button>


				}

			</div>

		</>
	);
};

export default Table;
