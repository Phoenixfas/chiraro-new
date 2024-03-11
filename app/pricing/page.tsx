import React from 'react'
import WebPricing from './WebPricing'
import GraphicsPricing from './GraphicsPricing'
import OrderModal from './OrderModal'

const page = () => {
  return (
    <div className='relative w-full flex flex-col items-center'>
      <OrderModal />
      <WebPricing />
      <GraphicsPricing />
    </div>
  )
}

export default page