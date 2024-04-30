import React from 'react'
import ThirdWave from './ThirdWave'
import IconsPage2 from './IconsPage2'

export  function InnerFunction (elem,index,setPlusActiveHolder2,plusActiveHolder2,ad){
    return(
       <>
       <div className="accordionCustom mb-2 ">

       <IconsPage2 setPlusActiveHolder2 ={setPlusActiveHolder2} />
   
   
       <div className="numNo">
           <p className="mb-0">S.no:{index}</p>
       </div>
   
       <div className="checkwid position-relative">
           <label for="" class="relative"><input type="checkbox" name="ad" /><span class="checkmark"></span></label>
       </div>
       <div>
           {ad}
       </div>
   
       <div className="namewid">
          {elem?.campaign_name}
       </div>
   </div>
       {
           plusActiveHolder2 &&   <div>  
           <ThirdWave/>
        </div>
       }
  
    </>
    )
}