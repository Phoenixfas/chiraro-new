'use client'
import { IoIosArrowRoundDown } from 'react-icons/io'

const ScrollOffers = () => {
  const handleScroll = () => {
    const offsetTop = document.getElementById('services')?.offsetTop
    if (offsetTop) {
      window.scrollTo({
        top: offsetTop + 100,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className="md:flex hidden absolute w-24 h-24 translate-x-[-50%] translate-y-[calc(100vh-70px)] bg-[rgba(47,64,75,1)] top-0 left-[35%] z-[10000] items-center justify-center cursor-pointer" onClick={handleScroll}>
      <IoIosArrowRoundDown className="text-[#BEC2C5] font-thin w-12 h-12" />
    </div>
  )
}

export default ScrollOffers