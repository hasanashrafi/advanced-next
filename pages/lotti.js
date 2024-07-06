import React from 'react'
import Lottie from 'react-lottie-player'
import animationData from "@/lottie/developer.json"

function Lotti() {
  return  (
  <div className='flex justify-center  p-2'>

  <Lottie animationData={animationData} className=' w-fit ' play loop={true} />
  </div>
  )
}

export default Lotti
