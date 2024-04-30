import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { getAdLineItems, getDbmLineItems } from '../../../Apis';

const TableFixed = {
	'position': 'fixed',
	'left': 0,
	'top': 0,
	'background-color': '#2e2c2c44',
	display: 'flex',
	'justify-content': 'center',
	' align-items': 'center',
	height: '100vh',
	width: '100%',
	'align-items': "center",
	"flex-direction": "column",
	"z-index": "4",

}
const close = {
	position: "absolute",
	top: "0",
	right: "0",
	top: '-40px',
	right: '0%',
	' font-size': '36px',
	'z-index': "3",

}


const apply = {
	position: "absolute",

	right: "0",
	bottom: '-60px',
	right: '0%',
	' font-size': '36px',
	'z-index': "3",

}




export default function Modalpop({ holadata, advertiser, setHolData, holadata2, setHolData2, setActiveSaveButton }) {
	// const [lineItems,setLineItems] = useState()

	const [allcheckBox, setAllCheckBox] = useState([])
	const [lineItemsData, setLineItemsData] = useState()
	const [lineItemsDataDbm, setLineItemsDataDbm] = useState()
	const [idholder, setIdHolder] = useState()
	const [idholder1, setIdHolder1] = useState()






	let GetApply = () => {
		let valid = lineItemsData?.filter((elem) => {
			if (elem?.checkbox === true) {

				return elem?.lineitem_id
			}

		})
		setIdHolder(valid)
	}


	let GetApply2 = () => {
		let valid = lineItemsDataDbm?.filter((elem) => {
			if (elem?.checkbox === true) {

				return elem?.lineitem_id
			}

		})
		setIdHolder1(valid)
	}






	const LineItemsData = async (lineItems) => {


		let linedata = await getAdLineItems(lineItems && lineItems.id, lineItems && lineItems?.idd);

		setLineItemsData(linedata?.data)
	}

	const LineItemsData2 = async (lineItems) => {

		let linedataDbm = await getDbmLineItems(lineItems && lineItems.id, lineItems && lineItems.idd);

		setLineItemsDataDbm(linedataDbm?.data?.line_items);
	}


	const MappingAdd = async (e, id, index) => {

		allcheckBox.push(id)
		setAllCheckBox(allcheckBox)

		if (e.target.checked === true) {
			let manipulateval = lineItemsData?.filter((elem, i) => {
				if (elem?.lineitem_id === id) {
					elem['checkbox'] = true
				}
				return elem

			})
			setLineItemsData(manipulateval)
		}
		else {
			let manipulateval = lineItemsData?.filter((elem, i) => {
				if (elem?.lineitem_id === id) {
					elem['checkbox'] = false
				}
				return elem
			})

			setLineItemsData(manipulateval)

		}
	}

	const MappingAdd2 = async (e, id, index) => {
		allcheckBox.push(id)
		setAllCheckBox(allcheckBox)
		if (e.target.checked === true) {
			// let linedata = await getDbmLineItems(idholder, advertiser?.advertiser_id);
			let manipulateval = lineItemsDataDbm?.filter((elem, i) => {
				if (elem?.line_item_id === id) {
					elem['checkbox'] = true
				}
				return elem
			})
			// console.log("hjjh")
			setLineItemsDataDbm(manipulateval)
		}
		else {
			// let linedata = await getDbmLineItems(idholder, advertiser?.advertiser_id);
			let manipulateval = lineItemsDataDbm?.filter((elem, i) => {
				if (elem?.line_item_id === id) {
					elem['checkbox'] = false
				}
				return elem
			})
			setLineItemsDataDbm(manipulateval)
		}
	}


	const allcheck = async (e) => {

		if (lineItemsData) {
			if (e.target.checked === true) {

				let manipulateval = lineItemsData?.filter((elem, i) => {
					elem['checkbox'] = true
					return elem
				})
				setLineItemsData(manipulateval)
			}
			else {

				let manipulateval = lineItemsData?.map((elem, i) => {
					elem['checkbox'] = false
					return elem
				})
				setLineItemsData(manipulateval)
			}
		}
		else {
			if (e.target.checked === true) {
				// let linedata = await getDbmLineItems(idholder, advertiser?.advertiser_id);
				let manipulateval = lineItemsDataDbm?.map((elem, i) => {
					elem['checkbox'] = true
					return elem
				})
				setLineItemsDataDbm(manipulateval)
			}
			else {
				// let linedata = await getDbmLineItems(idholder, advertiser?.advertiser_id);
				let manipulateval = lineItemsDataDbm?.map((elem, i) => {
					elem['checkbox'] = false
					return elem
				})
				setLineItemsDataDbm(manipulateval)
			}
		}

	}


	return (
		<div style={TableFixed}>
			{
				<>

					<div className="main-table report_component " style={{ position: 'relative', display: (lineItemsData ? lineItemsData : lineItemsDataDbm) ? "none" : "block" }}>
						<div className="table_wrapper " >
							<table>
								<thead>
									<tr>
										<th >S.no</th>
										<th></th>
										<th>Advertiser</th>
										<th>Campaign Name</th>
										<th>Date</th>
										<th>Impression</th>
										<th>Engagement</th>
										<th>CTR %</th>
										<th>Clicks</th>
										<th>CPE</th>

									</tr>
								</thead>
								<tbody>
									{holadata &&
										holadata?.map((c, index) => {
											return (
												<tr >
													<td>{index}</td>
													<td><input type="checkbox" onClick={() => { LineItemsData({ id: c.campaign_id, idd: advertiser?.advertiser_id }) }} /></td>
													<td>{advertiser?.advertiser}</td>
													<td>{c?.campaign_name}</td>
													<td>43,54,22,990</td>
													<td>43,54,22,990</td>
													<td>0.32%</td>
													<td>89,99,900</td>
													<td>0.32%</td>
													<td>90,89,232</td>


												</tr>
											)

										})

									}
									{holadata2 &&
										holadata2?.map((c, index) => {
											return (
												<tr >
													<td>{index}</td>
													<td><input type="checkbox" onClick={() => { LineItemsData2({ id: c.campaign_id, idd: advertiser?.advertiser_id }) }} /></td>
													<td>{advertiser?.advertiser}</td>
													<td>{c?.campaign_name}</td>
													<td>43,54,22,990</td>
													<td>43,54,22,990</td>
													<td>0.32%</td>
													<td>89,99,900</td>
													<td>0.32%</td>
													<td>90,89,232</td>


												</tr>
											)

										})
									}
								</tbody>
							</table>
						</div>




						<div style={close}>
							{
								setHolData && <AiFillCloseCircle onClick={() => {
									setHolData(false)
								}} style={{ fontSize: '30px', color: "#ed7d31" }} />
							}
							{
								setHolData2 && <AiFillCloseCircle onClick={() => {
									setHolData2(false)
								}} style={{ fontSize: '30px', color: "#ed7d31" }} />
							}



						</div>
						{
							(lineItemsData || lineItemsDataDbm) && <button className='mt-4' style={apply} onClick={() => {
								setLineItemsData(false)
								setLineItemsDataDbm(false)
								setActiveSaveButton(true)
								GetApply2()

							}}>
								Apply
							</button>

						}

					</div>




					<div className="main-table report_component " style={{ position: 'relative', display: (lineItemsData ? lineItemsData : lineItemsDataDbm) ? "block" : "none" }}>
						<div className="table_wrapper " >
							<table>
								<thead>
									<tr>
										<th >S.no</th>
										<th><input type="checkbox" onClick={(e) => { allcheck(e) }} /></th>
										<th>Advertiser</th>
										<th>Campaign Name</th>
										<th>Date</th>
										<th>Impression</th>
										<th>Engagement</th>
										<th>CTR %</th>
										<th>Clicks</th>
										<th>CPE</th>

									</tr>
								</thead>
								<tbody>
									{lineItemsData &&
										lineItemsData?.map((elem, index) => {
											return (
												<tr >
													<td>{index}</td>

													<td><input type="checkbox" checked={elem?.checkbox} onClick={(e) => { MappingAdd(e, elem?.lineitem_id, index) }} /></td>

													<td>{elem?.lineitem_name}</td>
													<td>43,54,22,990</td>
													<td>43,54,22,990</td>
													<td>0.32%</td>
													<td>89,99,900</td>
													<td>0.32%</td>
													<td>90,89,232</td>


												</tr>
											)

										})
									}

									{lineItemsDataDbm &&
										lineItemsDataDbm?.map((elem, index) => {
											return (
												<tr >
													<td>{index}</td>
													<td><input type="checkbox" checked={elem?.checkbox} onClick={(e) => {
														MappingAdd2(e, elem?.line_item_id, index
														)
													}} /></td>
													<td>{elem?.lineitem_name}</td>
													<td>43,54,22,990</td>
													<td>43,54,22,990</td>
													<td>0.32%</td>
													<td>89,99,900</td>
													<td>0.32%</td>
													<td>90,89,232</td>


												</tr>
											)

										})
									}

								</tbody>
							</table>

						</div>





						<div style={close}>
							<AiFillCloseCircle onClick={() => {
								setLineItemsData(false)
								setLineItemsDataDbm(false)
							}} style={{ fontSize: '30px', color: "#ed7d31" }} />
						</div>

						{
							allcheckBox && <button className='mt-4' style={apply} onClick={() => {
								setLineItemsData(false)
								setLineItemsDataDbm(false)
								setActiveSaveButton(true)
								GetApply()

							}}>
								Apply
							</button>
						}
					</div>


				</>
			}



		</div>

	)
}
