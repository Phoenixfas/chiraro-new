import Head from 'next/head'
import { Quicksand } from 'next/font/google'
import '../styles/globals.css'
import 'swiper/css';
import Preloader from './Preloader'
import { SpeedInsights } from '@vercel/speed-insights/next';
import HandleProvider from './HandleProvider';

const quicksand = Quicksand({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Chiraro Digital Solutions</title>
        <meta name="description" content="Chiraro offers cutting-edge digital solutions designed to drive business growth. From web development to digital marketing, our tailored services are crafted to meet your unique needs." />
        <meta name="keywords" content="digital solutions, web development, digital marketing, business growth, graphics design, technology services, Chiraro" />
        <meta name="author" content="Chiraro" />
        <link rel="canonical" href="https://chiraro.com/" />
        <meta property="og:title" content="Chiraro Digital Solutions" />
        <meta property="og:description" content="Discover cutting-edge digital solutions with Chiraro. Our comprehensive services from web development to digital marketing are tailored to accelerate your business growth." />
        <meta property="og:url" content="https://chiraro.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dywnslulk/image/upload/v1710100710/chiraro/logo/chiraro_blue_m5gcch.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chiraro Digital Solutions" />
        <meta name="twitter:description" content="Explore tailored digital solutions at Chiraro to boost your business growth. From bespoke web development to strategic digital marketing, we've got you covered." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dywnslulk/image/upload/v1710100710/chiraro/logo/chiraro_blue_m5gcch.png" />
        <link rel="icon" href="/images/logo/chiraro_blue.png" />
      </Head>
      
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
