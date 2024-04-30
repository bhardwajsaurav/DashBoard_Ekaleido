import React from 'react'



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
    "width": "53%",
   
   " border-top-left-radius": "20px",
    "border-bottom-right-radius": "20px",
    "outline": "none",
    "border":" 2px solid #eb5e00",
}


export default function SaveModal({setOpenModal,setActiveSaveButton}) {
  return (
    <div style={TableFixed}>
        <div className='' style={int}>
             <h1 >Save Your Mapping</h1>
              <input type="text"  style={inputfield}/>

              <button onClick ={()=>{setOpenModal(false)
                setActiveSaveButton(false)
                window.location.reload()
            }}>Submit</button>
        </div>
    </div>
  )
}
