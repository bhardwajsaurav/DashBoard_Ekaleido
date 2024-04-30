import React from 'react'

import { AiFillCloseCircle } from 'react-icons/ai';

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
	"z-index": 4,

}


const int = {
    display: "flex",
    "flex-direction": "column",
    background: "white",
    width: "50%",
    height: "50%",
    "align-items": "center",
   " justify-content": "center",
    gap: "37px",
    'border-top-left-radius': '50px',
   ' border-bottom-right-radius': '50px',
   padding: '30px 0',
}



const inputfield = {
    "padding": "10px",
    "width": "20%",
   
   
    "outline": "none",
    "border":" 2px solid #eb5e00",
}
const boxinput = {
    display: "flex",
    padding: "0 20px",
    gap:"10px",
    "align-items":"center",
   "justify-content":" center",
   

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



export default function EditVal({setEditval}) {
  return (
    <div style={TableFixed}>
        	<div style={close}>
							<AiFillCloseCircle  onClick ={()=>{setEditval(false)}}style={{ fontSize: '30px', color: "#ed7d31" }} />
			</div>
        <div className='' style={int}>
             <h1 >Save Your Mapping</h1>
             <div className='' style={boxinput}>

                    <input type="text"  style={inputfield} placeholder='Min'/>
                    <input type="text"  style={inputfield} placeholder='Max'/>
                
               
                    <input type="text"  style={inputfield} placeholder='Min'/>
                    <input type="text"  style={inputfield} placeholder='Max'/>
             </div>
           

              <button onClick={()=>{setEditval(false)}}>Submit</button>
        </div>
    </div>
  )
}