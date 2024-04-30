import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function Accordion3({capcha,campRatio,id}) {

 
    const [plusActive, setPlusActive] = useState(false)
    useEffect(() => {
        capcha(plusActive)
        campRatio(id)
    }, [plusActive])

   
    return (
        <div className="pluswid" onClick={() => { 
            setPlusActive(!plusActive)
           
            }}>
            {
                plusActive ? <FaPlus /> : <FaMinus />
            }
        </div>
    )
  
}
