import React from 'react'
import IconsPage2 from './IconsPage2'
import WaveSecond from './WaveSecond'

export default function CampInner({campaigns,ad,advertiserid,setDataContainer,dataContainer,setDataContainer2,dataContainer2}) {
  return (
    
        // campaigns?.map((elem,index)=>{
        //     return(
        //         <div className="accordionCustom mb-2 ">

        //         <IconsPage2  />
            
            
        //         <div className="numNo">
        //             <p className="mb-0">S.no:{index}</p>
        //         </div>
            
        //         <div className="checkwid position-relative">
        //             <label for="" class="relative"><input type="checkbox" name="ad" /><span class="checkmark"></span></label>
        //         </div>
        //         <div>
        //             {ad}
        //         </div>
            
        //         <div className="namewid">
        //            {elem?.campaign_name}
        //         </div>
        //     </div>
        //     )
        // })
        <WaveSecond campaigns ={campaigns} ad={ad} advertiserid={advertiserid}  setDataContainer={setDataContainer} dataContainer={dataContainer} setDataContainer2={setDataContainer2} dataContainer2={dataContainer2} />
  )
}
