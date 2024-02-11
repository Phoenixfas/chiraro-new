'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import style from "../styles/LogoSvg.module.css"

export default function LogoSvg() {
  const [isOn, setIsOn] = useState(true)

  useEffect(() => {

    // const interval = setInterval(() => {
    //   setIsOn(false)
    //   const timeout = setTimeout(() => {
    //     setIsOn(true)
    //   }, 100);
    // }, 5100);

    // return () => {
    //   clearInterval(interval)
    // }

  }, [isOn])


  return (
    <div className={style.logo}>
      {isOn && <svg id={style.logoSvg} viewBox="0 0 412 627" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={style.green} d="M206.46 84.9245V614.574" stroke="green" strokeWidth="23.0282" strokeMiterlimit="10" strokeLinecap="round"/>
          <path className={style.red} d="M205.232 582.169C205.232 582.169 230.794 550.07 244.457 544.607C258.12 539.144 267.293 543.149 281.916 537.098C324.954 519.263 311.124 455.219 311.124 455.219C311.124 455.219 290.578 472.491 260.641 484.683C238.943 493.523 241.144 521.592 241.898 527.758C241.962 528.296 242.589 528.551 243.024 528.219C245.903 525.942 254.641 518.995 259.093 514.696C268.125 505.971 289.682 492.013 289.682 492.013C289.682 492.013 282.492 507.685 266.078 520.018C257.673 526.338 243.779 531.609 233.186 537.085C223.54 542.061 206.064 559.947 206.064 559.947L205.245 582.156L205.232 582.169Z" fill="red"/>
          <path className={style.orange} d="M205.232 521.95C205.232 521.95 192.553 505.101 177.585 499.216C163.32 493.612 132.833 494.418 121.614 461.436C110.368 428.391 98.9951 400.923 98.9951 400.923C98.9951 400.923 151.192 401.691 170.421 430.425C184.506 451.483 182.024 470.405 181.193 477.045C181.116 477.62 180.438 477.902 179.965 477.543C176.805 475.1 168.668 459.019 163.794 454.4C153.892 445.022 130.198 426.037 130.198 426.037C130.198 426.037 149.555 453.261 159.047 466.515C165.674 475.778 179.12 481.19 190.737 487.075C201.317 492.435 204.323 498.051 204.323 498.051L205.219 521.937L205.232 521.95Z" fill="orange"/>
          <path className={style.lightblue} d="M130.212 212.194V280.14L206.001 322.87" stroke="lightblue" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.cyan} d="M281.776 167.097V235.043L206 277.773" stroke="cyan" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.pink} d="M43.9837 156.849V224.795L135.444 252.967" stroke="pink" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.grey} d="M368.016 111.766V179.712L276.556 207.883" stroke="grey" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.purple} d="M130.212 212.194C147.877 212.194 162.196 197.875 162.196 180.21C162.196 162.546 147.877 148.227 130.212 148.227C112.548 148.227 98.2284 162.546 98.2284 180.21C98.2284 197.875 112.548 212.194 130.212 212.194Z" stroke="purple" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.yellow} d="M281.776 167.097C299.441 167.097 313.76 152.778 313.76 135.114C313.76 117.449 299.441 103.13 281.776 103.13C264.113 103.13 249.793 117.449 249.793 135.114C249.793 152.778 264.113 167.097 281.776 167.097Z" stroke="yellow" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.lightgreen} d="M43.9837 156.849C61.6477 156.849 75.9673 142.53 75.9673 124.866C75.9673 107.201 61.6477 92.882 43.9837 92.882C26.3196 92.882 12 107.201 12 124.866C12 142.53 26.3196 156.849 43.9837 156.849Z" stroke="lightgreen" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.brown} d="M368.016 111.763C385.681 111.763 400 97.4436 400 79.7794C400 62.1154 385.681 47.7958 368.016 47.7958C350.353 47.7958 336.033 62.1154 336.033 79.7794C336.033 97.4436 350.353 111.763 368.016 111.763Z" stroke="brown" strokeWidth="23.0282" strokeMiterlimit="10"/>
          <path className={style.blue} d="M206.46 75.9668C224.125 75.9668 238.444 61.6472 238.444 43.9832C238.444 26.3191 224.125 11.9995 206.46 11.9995C188.797 11.9995 174.477 26.3191 174.477 43.9832C174.477 61.6472 188.797 75.9668 206.46 75.9668Z" fill="white" stroke="blue" strokeWidth="23.0282" strokeMiterlimit="10"/>
      </svg>}
    </div>
  )
}
