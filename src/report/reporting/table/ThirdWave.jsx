import React, { useEffect, useState } from 'react'
import { getAdLineItems, getDbmLineItems } from '../../../Apis';
import IconsPage2 from './IconsPage2';

export default function ThirdWave({ campaign_id, advertiserid, ad, firetoLine, plusActiveHolder2, setDataContainer, dataContainer, capName, setDataContainer2, dataContainer2 }) {
    const [lineData, setLineData] = useState()
    const [lineItemsDataDbm, setLineItemsDataDbm] = useState()
    // console.log(lineItemsDataDbm,"---------------------")
    useEffect(() => {
        LineItemsData()

    }, [campaign_id])

    useEffect(() => {

        LineItemsData2()
    }, [campaign_id])

    useEffect(() => {
        linecheck()
        linecheck2()
    }, [firetoLine])

    const LineItemsData = async () => {
        let linedata = await getAdLineItems(campaign_id && campaign_id, advertiserid && advertiserid);
        setLineData(linedata?.data)
    }

    const LineItemsData2 = async (lineItems) => {

        let linedataDbm = await getDbmLineItems(campaign_id && campaign_id, advertiserid && advertiserid);

        setLineItemsDataDbm(linedataDbm?.data?.line_items);
    }


    const linecheck = () => {

        let val = []
        if (firetoLine) {

            let data2 = lineData?.filter((elem) => {
                elem["checkbox"] = true
                val.push(elem.lineitem_id)
                setDataContainer(val)
                return elem
            })

         
            setLineData(data2)
        }
        else {
            let data2 = lineData?.filter((elem) => {
                elem["checkbox"] = false
                let arr = [];
                setDataContainer(arr)
                return elem
            })
            setLineData(data2)
        }

    }


    const linecheck2 = () => {

        let val = []
        if (firetoLine) {

            let data2 = lineItemsDataDbm?.filter((elem) => {
                elem["checkbox"] = true
                val.push(elem.line_item_id)
                setDataContainer2(val)
                return elem
            })
            setLineItemsDataDbm(data2)
        }
        else {
            let data2 = lineItemsDataDbm?.filter((elem) => {
                elem["checkbox"] = false
                let arr = [];
                setDataContainer2(arr)
                return elem
            })
            setLineItemsDataDbm(data2)
        }

    }



    let  singleCheck = (e,id,index)=>{
        let val = []
         if(e.target.checked === true){
            let data2 = lineData?.filter((elem) => {
                if(elem?.lineitem_id === id){
                  
                    elem["checkbox"] = true
                    dataContainer.push(elem.lineitem_id)
                    console.log(elem.lineitem_id,dataContainer,"::::::")
                    setDataContainer(dataContainer)
                  
                }
                return elem
            })
              
            setLineData(data2)
         }
         else{
            let data2 = lineData?.filter((elem) => {
                if(elem?.lineitem_id === id){
                    elem["checkbox"] = false
                    dataContainer[index] = ""
                    
                    setDataContainer(dataContainer)
                   
                }
                return elem
                
            })
            setLineData(data2)
         }

    }

    let  singleCheck2 = (e,id,index)=>{
        let val = []
         if(e.target.checked === true){
            let data2 = lineItemsDataDbm?.filter((elem) => {
                if(elem?.line_item_id === id){
                  
                    elem["checkbox"] = true
                  
                    dataContainer2.push(elem.line_item_id)
                    setDataContainer2(dataContainer2)
                  
                }
                return elem
                
            })
            setLineItemsDataDbm(data2)
         }
         else{
            let data2 = lineItemsDataDbm?.filter((elem) => {
                if(elem?.line_item_id === id){
                    elem["checkbox"] = false
                    dataContainer2[index] = ""
                   
                    setDataContainer2(dataContainer2)
                  
                }
                return elem
                
            })
            setLineItemsDataDbm(data2)
         }

    }




    return (
        <>
            <div>
                {
                    lineData?.map((elem, index) => {
                        return (
                            <div className="accordionCustom mb-2 ">
                                {/* 
                        <IconsPage2  /> */}


                                <div className="numNo" style={{ "fontSize": "10px" }}>
                                    <p className="mb-0">S.no:{index}</p>
                                </div>

                                <div className="checkwid position-relative" style={{ "fontSize": "10px" }}>
                                    <label for="" class="relative"><input type="checkbox" name="ad" checked={elem?.checkbox} onClick={(e)=>{
                                        singleCheck(e,elem.lineitem_id,index)
                                    }}/><span class="checkmark"></span></label>
                                </div>
                                <div style={{ "fontSize": "10px" }}>
                                    {ad}

                                </div>

                                <div className="namewid" style={{ "fontSize": "10px" }}>
                                    {elem?.lineitem_name}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div>
                {
                    lineItemsDataDbm?.map((elem, index) => {
                        return (
                            <div className="accordionCustom mb-2 ">
                                {/* 
                            <IconsPage2  /> */}


                                <div className="numNo" style={{ "fontSize": "10px" }}>
                                    <p className="mb-0">S.no:{index}</p>
                                </div>

                                <div className="checkwid position-relative" style={{ "fontSize": "10px" }}>
                                    <label for="" class="relative" ><input type="checkbox" name="ad" checked={elem?.checkbox} onClick={(e)=>{singleCheck2(e,elem.line_item_id,index)}} /><span class="checkmark"></span></label>
                                </div>
                                <div style={{ "fontSize": "10px" }}>
                                    {ad}

                                </div>
                                <div style={{ "fontSize": "10px" }}>
                                    {capName}
                                </div>

                                <div className="namewid" style={{ "fontSize": "10px" }}>
                                    {elem?.line_item}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
