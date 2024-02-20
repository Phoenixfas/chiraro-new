import { BsGlobe2 } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile, HiOutlinePaintBrush } from "react-icons/hi2";

const services = [
    {
        id: 1,
        name: 'Web Development',
        description: `Experience unmatched web development, tailored sites, and seamless user experiences. Your digital success begins here, crafted uniquely for your brand's online journey.`,
        icon: <BsGlobe2 />,
        price: 0,
    },
    {
        id: 2,
        name: 'Mobile Development',
        description: `Transform your business with our mobile development expertise. We create innovative iOS and Android apps tailored to your needs, ensuring a standout digital presence.`,
        icon: <HiOutlineDevicePhoneMobile />,
        price: 0,
    },
    {
        id: 3,
        name: 'Graphics Design',
        description: `Revamp your brand with our expert graphic design. From eye-catching logos to compelling marketing, we meticulously craft visuals that leave a lasting and memorable impact.`,
        icon: <HiOutlinePaintBrush />,
        price: 0,
    }
]

export default services;