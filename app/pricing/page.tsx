import React from 'react'
import WebPricing from './WebPricing'
import GraphicsPricing from './GraphicsPricing'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <WebPricing />
      <GraphicsPricing />
    </div>
  )
}

export default page