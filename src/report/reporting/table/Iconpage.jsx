import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";


export default function Iconpage({ setPlusActiveHolder }) {
    const [plusActive, setPlusActive] = useState(false)
    useEffect(() => {
        if(setPlusActiveHolder){
            setPlusActiveHolder(plusActive)
        }
    }, [plusActive])
    return (
        <div className="pluswid" onClick={() => { setPlusActive(!plusActive) }}>
            {
                plusActive ? <FaPlus /> : <FaMinus />
            }
        </div>
    )
}
