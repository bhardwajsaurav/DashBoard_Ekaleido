import React, { useEffect, useState } from 'react'
import "./statusmodal.css"
import { AiFillCloseCircle } from 'react-icons/ai';
import { StatusManipulation, SubmitMapped } from '../../Apis';
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
export default function StatusModal({ setStatusModal }) {
  const navigate = useNavigate();
  const [modalPop, setStatusPop] = useState(true)
  const [statusPOp, setStatusPOp] = useState(true)
  const [loader, setLoader] = useState()



  const SaveMapped = async () => {
    setLoader(true)
    let data = await SubmitMapped()
    let data2 = await StatusManipulation()
    console.log(data)
    setStatusPOp(data2?.data?.status)
    if(data2?.data?.status){
      setLoader(false)
    }
   
    setTimeout(() => {
      removeModal()
      navigate("/newcampaign");
    }, 3000);

  }

  const removeModal = (() => {
    setStatusModal(false)
  })
  return (
    <>
      <div className='st'>
        {
          modalPop ? <div className='title_div position-relative'>
            <AiFillCloseCircle className="text-white mb-2 fs-3" onClick={removeModal} />

            <h3 className='mb-4'>Are you sure to save campaign</h3>

            <button className='m-auto d-block text-dark' style={{ "background": "white" }} onClick={() => {
              setStatusPop(false)
              SaveMapped()
            }} >
              Save
            </button>
          </div> : <div className='title_div position-relative'>
            <AiFillCloseCircle className="text-white mb-2 fs-3" onClick={() => { setStatusModal(false) }} />
            <h1>Status : {statusPOp}</h1>
          </div>
        }




      </div>


      {
        loader && <div className="loaders">
          <DotLoader color="#fb8332" size={100} loading={true} />
        </div>
      }
    </>

  )
}
