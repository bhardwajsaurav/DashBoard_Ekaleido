import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

export default function IconsPage2({setPlusActiveHolder2}) {
    const [plusActive2, setPlusActive2] = useState(false)
    useEffect(()=>{
        setPlusActiveHolder2(plusActive2)
    },[plusActive2])
  return (
    <div className="pluswid  bg-primary" onClick={() => { setPlusActive2(!plusActive2) }}>
    {
        plusActive2 ? <FaPlus className='text-white' /> : <FaMinus className='text-white' />
    }
</div>
  )
}
