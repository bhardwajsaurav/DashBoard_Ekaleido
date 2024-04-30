import React, { useState } from 'react'
import CampInner from './CampInner'
import Iconpage from './Iconpage'

export default function Wrapper({elem,index,setDataContainer,dataContainer,setDataContainer2,dataContainer2}) {
    const [plusActiveHolder, setPlusActiveHolder] = useState(false)
    
    return (
        <>


            <div className="accordionCustom mb-2">

                <Iconpage setPlusActiveHolder={setPlusActiveHolder} />


                <div className="numNo">
                    <p className="mb-0">S.no:{index}</p>
                </div>

                

                <div className="namewid">
                    {elem.advertiser ? elem.advertiser : elem?.advertiser_name}
                </div>
            </div>
            
             <div className='p-2 px-4 campaignsHeight' style={{display:( plusActiveHolder ?"block" :"none")}}>

                    <CampInner  advertiserid = {elem?.advertiser_id}  campaigns = {elem?.campaigns} ad={elem.advertiser ? elem.advertiser : elem?.advertiser_name} setDataContainer={setDataContainer} dataContainer={dataContainer} setDataContainer2={setDataContainer2} dataContainer2={dataContainer2}/>

                </div>
            
        </>
    )
}
