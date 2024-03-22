import { Metadata } from 'next';
import { Quicksand } from 'next/font/google'
import '../styles/globals.css'
import 'swiper/css';
import Preloader from './Preloader'
import { SpeedInsights } from '@vercel/speed-insights/next';
import HandleProvider from './HandleProvider';
import 'aos/dist/aos.css'


const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://chiraro.com/'),
  title: 'Chiraro Digital Solutions',
  description: 'Chiraro offers cutting-edge digital solutions designed to drive business growth. From web development to digital marketing, our tailored services are crafted to meet your unique needs.',
  keywords: 'digital solutions, web development, digital marketing, business growth, graphics design, technology services, Chiraro',
  authors: [{ name: 'Chiraro', url: 'https://chiraro.com/' }],
  openGraph: {
    title: 'Chiraro Digital Solutions',
    description: 'Discover cutting-edge digital solutions with Chiraro. Our comprehensive services from web development to digital marketing are tailored to accelerate your business growth.',
    url: 'https://chiraro.com/',
    type: 'website',
    images: [{ url: 'https://res.cloudinary.com/dywnslulk/image/upload/v1710100710/chiraro/logo/chiraro_blue_m5gcch.png', alt: 'Chiraro' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiraro Digital Solutions',
    description: 'Explore tailored digital solutions at Chiraro to boost your business growth. From bespoke web development to strategic digital marketing, we\'ve got you covered.',
    images: 'https://res.cloudinary.com/dywnslulk/image/upload/v1710100710/chiraro/logo/chiraro_blue_m5gcch.png'
  },
  icons: [{ url: '/favicon.ico', rel: 'icon' }]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Preloader>
          <HandleProvider>
            {children}
            <SpeedInsights />
          </HandleProvider>
        </Preloader>
      </body>
    </html>
  )
}
