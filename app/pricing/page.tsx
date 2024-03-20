import React from 'react'
import WebPricing from './WebPricing'
import GraphicsPricing from './GraphicsPricing'
import OrderModal from './OrderModal'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Pricing | Chiraro Digital Solutions',
  description: "Discover transparent and competitive pricing options for our services. We believe in delivering exceptional value without compromising on quality. Our flexible pricing plans cater to businesses of all sizes and budgets.",
}
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