import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { NewLineItems } from '../../../Apis';
import EditVal from '../EditVal/EditVal';

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
	"z-index": 3,

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





export default function NewCamps({ dataNewL, setDataNewL,Selectid }) {
	const [editval,setEditval] = useState()
	return (
		<>
				<div style={TableFixed}>
			{
				<>

					<div className="main-table report_component " style={{ position: 'relative' }}>
						<div className="table_wrapper " >
							<table>
								<thead>
									<tr>
										<th >S.no</th>
										<th></th>
										<th>Advertiser Name</th>
										<th>Campaign Name</th>
										<th>Conversions</th>
										<th>Impressions</th>
										<th>Interactive Impressions</th>
										<th>Total Interaction Time</th>
										<th>Total Media Cost</th>

									</tr>
								</thead>
								<tbody>
									{
										dataNewL?.data?.data?.[Selectid]?.map((elem, index) => {
										
											return (
												<tr >
													<td>{index}</td>
													<td><input type="checkbox" /></td>
													<td >

														{
															elem.advertiser_name
														}
													</td>

													<td>
														{elem.campaign_name}
													</td>

													<td>
														{elem.conversions}
													</td>
													<td>
														{elem.impressions}
													</td>
													<td>{elem.interactive_impressions}</td>
													<td>{elem.total_interaction_time}</td>
													<td>{elem.total_media_cost}</td>


												</tr>
											)
										})
									}



								</tbody>
							</table>
						</div>




						<div style={close}>
							<AiFillCloseCircle onClick={() => { setDataNewL(false) }} style={{ fontSize: '30px', color: "#ed7d31" }} />
						</div>


						<button className='mt-4' style={apply} onClick={()=>{setEditval(true)}}>
								Apply
							</button>

					</div>
					
				</>
			}



		</div>

			{
				editval && <EditVal setEditval ={setEditval}/>
			}
		
		
		</>
	

	)
}
