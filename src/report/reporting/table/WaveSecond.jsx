import React, { useEffect, useState } from 'react'
import IconsPage2 from './IconsPage2'
import ThirdWave from './ThirdWave'

 function InnerFun ({elem,index,ad,advertiserid,setDataContainer,dataContainer,setDataContainer2,dataContainer2}){
    const [plusActiveHolder2, setPlusActiveHolder2] = useState(false)
    const [firetoLine,setFiretoLine] = useState()
    
     return(
        <>
        <div className="accordionCustom mb-2 ">

        <IconsPage2 setPlusActiveHolder2 ={setPlusActiveHolder2} />
    
    
        <div className="numNo " style={{ "fontSize": "10px" }}>
            <p className="mb-0">S.no:{index}</p>
        </div>
    
        <div className="checkwid position-relative">
            <label for="" class="relative"><input type="checkbox" name="ad" onClick={(e)=>{setFiretoLine(e.target.checked)}} /><span class="checkmark"></span></label>
        </div>
        <div style={{ "fontSize": "10px" }}>
            {ad}
        </div>
    
        <div className="namewid" style={{ "fontSize": "10px" }}>
           {elem?.campaign_name}
        </div>
    </div>
        
            <div className='p-3' style={{display:(plusActiveHolder2? "block":"none")}}>  
            <ThirdWave campaign_id={elem.campaign_id} advertiserid={advertiserid} ad={ad} firetoLine={firetoLine} plusActiveHolder2={plusActiveHolder2} setDataContainer={setDataContainer} dataContainer={dataContainer} capName= {elem?.campaign_name} setDataContainer2={setDataContainer2} dataContainer2={dataContainer2}/>
         </div>
        
   
     </>
     )
}


export default function WaveSecond({campaigns,ad,advertiserid,setDataContainer,dataContainer,setDataContainer2,dataContainer2}) {
    

  
    

  return (
    campaigns?.map((elem,index)=>{
        return(
            <>
              <InnerFun key={index} elem ={elem} index ={index}  ad={ad} advertiserid={advertiserid} setDataContainer={setDataContainer} dataContainer={dataContainer} setDataContainer2={setDataContainer2} dataContainer2={dataContainer2}/>
       
         </>
        )
    })
  )
}
