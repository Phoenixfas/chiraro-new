"use client"
import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

const Offers = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const { scrollYProgress: scroll1 } = useScroll(
    {
      target: ref1,
      offset: ["0 1", "1.33 1"],
    },
  )
  const { scrollYProgress: scroll2 } = useScroll(
    {
      target: ref2,
      offset: ["0 1", "1.33 1"],
    },
  )
  const { scrollYProgress: scroll3 } = useScroll(
    {
      target: ref3,
      offset: ["0 1", "1.33 1"],
    },
  )

  return (
    <section
      id="offers"
      className="w-full items-center justify-center flex relative"
    >
      <div className="px-7 sm:px-[100px] lg:px-[200px] w-full md:px-10 pt-10 lg:pt-24 flex flex-col gap-[100px] md:gap-[50px] mb-20 md:mb-0 items-center lg:items-start justify-start">
        <motion.div ref={ref1} style={{
          scale: scroll1,
          opacity: scroll1,
        }} className="w-full md:w-[80%] lg:w-[700px] h-fit pl-6 md:pl-[100px] pr-6 md:pr-[40px] py-5 rounded-xl bg-[rgba(47,64,75,1)] relative">
          <div className="absolute top-[50%] left-[-20%] w-[300px] h-[300px] bg-[#43D0F7] opacity-30 blur-[100px]">
            {" "}
          </div>
          <div className="absolute -top-[25px] md:top-[10%] rounded-full border-[4px] left-[50%] -translate-x-1/2 md:translate-x-0 md:left-[-8%] w-[130px] p-5 h-[130px] border-[#5FE0F9] bg-[#2F404B] flex justify-center items-center">
            <svg
              width="47"
              height="58"
              viewBox="0 0 47 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5 55C23.5 55 44 44.6 44 29V10.8L23.5 3L3 10.8V29C3 44.6 23.5 55 23.5 55Z"
                stroke="#84F5FC"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="md:mt-0 mt-24 md:block flex  justify-center flex-col md:text-start text-center">
            <h1 className="text-[36px] font-semibold pb-1">Robust</h1>
            <p className="text-[18px] font-light leading-[32px] tracking-wider pb-5">
              Our solutions are designed to be robust, scalable, and reliable,
              ensuring that your digital infrastructure is equipped to handle the
              demands of the modern world, while providing a seamless and
              frictionless experience for your users.
            </p>
          </div>

        </motion.div>
        <motion.div ref={ref2} style={{
          scale: scroll2,
          opacity: scroll2,
        }} className="w-full md:w-[80%] lg:w-[700px] h-fit pl-6 md:pl-[40px] md:pr-[100px] pr-6 py-5 rounded-xl bg-[rgba(47,64,75,1)] relative lg:self-end">
          <div className="absolute hidden md:block top-[50%] right-0 lg:right-[-20%] w-[300px] h-[300px] bg-[#43D0F7] opacity-30 blur-[100px]">
            {" "}
          </div>
          <div className="absolute -top-[25px] md:top-[10%] right-[50%] translate-x-1/2 md:translate-x-0 md:right-[-8%] w-[130px] p-5 h-[130px] rounded-full border-[4px] border-[#5FE0F9] bg-[#2F404B] flex justify-center items-center">
            <svg
              width="60"
              height="62"
              viewBox="0 0 60 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 0C28.6193 0 27.5 1.11929 27.5 2.5V5.08999C27.5 6.47071 28.6193 7.58999 30 7.58999C31.3807 7.58999 32.5 6.47071 32.5 5.08999V2.5C32.5 1.11929 31.3807 0 30 0ZM12.3453 8.91586C11.3609 7.91967 9.75236 7.91967 8.76798 8.91586C7.80007 9.89539 7.80007 11.4712 8.76798 12.4508L10.5356 14.2396C11.5199 15.2357 13.1285 15.2357 14.1129 14.2396C15.0808 13.26 15.0808 11.6842 14.1129 10.7046L12.3453 8.91586ZM51.232 8.91586C50.2476 7.91967 48.6391 7.91967 47.6547 8.91586L45.8871 10.7046C44.9192 11.6842 44.9192 13.26 45.8871 14.2396C46.8715 15.2357 48.4801 15.2357 49.4644 14.2396L51.232 12.4508C52.1999 11.4712 52.1999 9.89539 51.232 8.91586ZM30 12.65C20.3642 12.65 12.5 20.6085 12.5 30.36C12.5 36.4656 15.6477 41.7377 20.3382 44.8868C21.6069 45.7385 22.5 47.1019 22.5 48.63V56.94C22.5 59.7055 24.7673 62 27.5 62H32.5C35.2327 62 37.5 59.7055 37.5 56.94V48.63C37.5 47.1019 38.3931 45.7385 39.6618 44.8868C44.3523 41.7377 47.5 36.4656 47.5 30.36C47.5 20.6085 39.6358 12.65 30 12.65ZM30 17.71C36.9342 17.71 42.5 23.3426 42.5 30.36C42.5 35.8864 39.0133 40.5378 34.165 42.2737L32.5 42.8667V54.44C32.5 55.8207 31.3807 56.94 30 56.94C28.6193 56.94 27.5 55.8207 27.5 54.44V42.8667L25.835 42.2737C20.9867 40.5378 17.5 35.8864 17.5 30.36C17.5 23.3426 23.0658 17.71 30 17.71ZM2.53 27.83C1.13272 27.83 0 28.9627 0 30.36C0 31.7573 1.13272 32.89 2.53 32.89H4.97C6.36728 32.89 7.5 31.7573 7.5 30.36C7.5 28.9627 6.36728 27.83 4.97 27.83H2.53ZM55.03 27.83C53.6327 27.83 52.5 28.9627 52.5 30.36C52.5 31.7573 53.6327 32.89 55.03 32.89H57.47C58.8673 32.89 60 31.7573 60 30.36C60 28.9627 58.8673 27.83 57.47 27.83H55.03ZM14.1129 46.4804C13.1285 45.4842 11.5199 45.4842 10.5356 46.4804L8.76798 48.2692C7.80007 49.2487 7.80007 50.8246 8.76798 51.8041C9.75236 52.8003 11.3609 52.8003 12.3453 51.8041L14.1129 50.0153C15.0808 49.0358 15.0808 47.4599 14.1129 46.4804ZM49.4644 46.4804C48.4801 45.4842 46.8715 45.4842 45.8871 46.4804C44.9192 47.4599 44.9192 49.0358 45.8871 50.0153L47.6547 51.8041C48.6391 52.8003 50.2476 52.8003 51.232 51.8041C52.1999 50.8246 52.1999 49.2487 51.232 48.2692L49.4644 46.4804Z"
                fill="#84F5FC"
              />
            </svg>
          </div>
          <div className="md:mt-0 mt-24 md:block flex  justify-center flex-col md:text-start text-center">
            <h1 className="text-[36px] font-semibold pb-1">Innovative</h1>
            <p className="text-[18px] font-light leading-[32px] tracking-wider pb-5">
              Dedicated to the relentless pursuit of innovation, we specialize
              in transforming your visionary ideas into tangible, cutting-edge
              digital realities that redefine the future of technology and
              business
            </p>
          </div>

        </motion.div>
        <motion.div ref={ref3} style={{
          scale: scroll3,
          opacity: scroll3,
        }} className="w-full md:w-[80%] lg:w-[700px] h-fit pl-6 md:pl-[100px] pr-6 md:pr-[40px] py-5 rounded-xl bg-[rgba(47,64,75,1)] relative">
          <div className="absolute top-[50%] left-[-20%] w-[300px] h-[300px] bg-[#43D0F7] opacity-30 blur-[100px]">
            {" "}
          </div>
          <div className="absolute -top-[25px] md:top-[10%] rounded-full border-[4px] left-[50%] -translate-x-1/2 md:translate-x-0 md:left-[-8%] w-[130px] p-5 h-[130px] border-[#5FE0F9] bg-[#2F404B] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" className=""><g><path d="M404.267 315.41c-10.048-20.949-45.995-50.027-80.725-78.123-19.371-15.659-37.675-30.464-49.344-42.133-2.923-2.944-7.296-3.883-11.157-2.496-7.189 2.603-11.627 4.608-15.125 6.165-5.333 2.389-7.125 3.2-14.315 3.925a10.663 10.663 0 0 0-7.808 4.672c-15.083 22.549-30.699 20.629-41.131 17.131-3.328-1.109-3.925-2.539-4.245-3.904-2.24-9.365 9.003-31.168 23.573-45.739 34.667-34.688 52.544-43.371 90.304-26.496 42.837 19.157 85.76 34.155 86.187 34.304a10.654 10.654 0 0 0 13.589-6.571c1.92-5.568-1.003-11.648-6.571-13.589-.427-.149-42.496-14.848-84.48-33.643-48.917-21.867-75.755-7.467-114.091 30.891-14.592 14.592-34.411 44.117-29.291 65.771 2.197 9.216 8.683 16.043 18.325 19.221 24.171 7.979 46.229.341 62.656-21.461 6.784-1.045 10.475-2.581 16.021-5.077a209.95 209.95 0 0 1 7.467-3.2c12.203 11.456 28.672 24.789 46.016 38.805 31.36 25.365 66.923 54.123 74.923 70.763 3.947 8.213-.299 13.568-3.179 16.021-4.224 3.627-10.005 4.779-13.141 2.581-3.456-2.368-7.957-2.517-11.52-.384a10.66 10.66 0 0 0-5.141 10.304c.725 6.784-5.483 10.667-8.171 12.011-6.827 3.456-13.952 2.859-16.619.384-2.987-2.773-7.275-3.584-11.072-2.176-3.797 1.429-6.443 4.928-6.827 8.981-.64 6.997-5.824 13.717-12.587 16.341-3.264 1.237-8 1.984-12.245-1.899a10.791 10.791 0 0 0-9.749-2.475 10.65 10.65 0 0 0-7.488 6.72c-.405 1.067-1.323 3.627-11.307 3.627-7.104 0-19.883-4.8-26.133-8.939-7.488-4.928-54.443-39.957-94.997-73.92-5.696-4.8-15.552-15.083-24.256-24.171-7.723-8.064-14.784-15.381-18.411-18.453-4.544-3.84-11.264-3.264-15.04 1.259-3.797 4.501-3.243 11.243 1.259 15.04 3.307 2.795 9.707 9.557 16.768 16.917 9.515 9.941 19.349 20.224 25.963 25.771 39.723 33.259 87.467 69.163 96.981 75.413 7.851 5.163 24.768 12.416 37.867 12.416 10.517 0 18.603-2.411 24.213-7.125 7.509 2.923 16.043 2.944 24.256-.256 9.707-3.755 17.685-11.328 22.208-20.501 8.405 1.792 18.027.533 26.773-3.861 8.555-4.309 14.741-10.901 17.813-18.603 8.491.448 17.237-2.56 24.469-8.768 12.247-10.474 15.617-26.772 8.535-41.471z" fill="#43D0F7" opacity="1" data-original="#43D0F7" className=""></path><path d="M213.333 138.663h-96c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h96c5.888 0 10.667-4.779 10.667-10.667s-4.779-10.667-10.667-10.667zM435.52 292.711c-3.307-4.885-9.92-6.229-14.805-2.901l-31.189 20.949c-4.885 3.285-6.187 9.92-2.901 14.805a10.717 10.717 0 0 0 8.875 4.715c2.027 0 4.096-.576 5.931-1.813l31.189-20.949c4.884-3.286 6.185-9.92 2.9-14.806zM369.301 343.613c-7.637-6.016-41.792-40.981-62.912-62.997-4.075-4.267-10.837-4.416-15.083-.32-4.267 4.075-4.395 10.837-.32 15.083 5.483 5.717 53.845 56.128 65.088 65.003a10.623 10.623 0 0 0 6.592 2.283c3.136 0 6.272-1.408 8.405-4.075 3.649-4.609 2.86-11.329-1.77-14.977zM326.677 365.01c-12.779-10.219-44.885-44.331-52.139-52.224-4.011-4.352-10.731-4.608-15.083-.64-4.331 3.989-4.629 10.752-.64 15.083.384.405 38.699 41.771 54.528 54.443a10.72 10.72 0 0 0 6.656 2.325c3.115 0 6.229-1.387 8.341-3.989 3.671-4.609 2.924-11.329-1.663-14.998zM284.224 386.493c-15.211-12.821-46.336-45.952-52.416-52.459-4.032-4.309-10.795-4.544-15.083-.512-4.309 4.032-4.523 10.773-.512 15.083 8.747 9.365 38.528 40.939 54.251 54.208a10.638 10.638 0 0 0 6.869 2.517c3.029 0 6.059-1.301 8.171-3.797 3.797-4.523 3.221-11.243-1.28-15.04z" fill="#43D0F7" opacity="1" data-original="#43D0F7" className=""></path><path d="M124.672 120.253C106.389 102.93 33.28 97.319 11.307 96.018c-3.029-.149-5.824.853-7.957 2.88A10.662 10.662 0 0 0 0 106.663v192c0 5.888 4.779 10.667 10.667 10.667h64c4.608 0 8.704-2.965 10.133-7.36 1.557-4.779 38.315-117.589 43.157-173.056.278-3.243-.917-6.443-3.285-8.661zM66.88 287.997H21.333V118.098c34.283 2.709 71.275 8.597 84.715 15.125-5.653 46.72-31.232 129.728-39.168 154.774zM501.333 117.33c-83.755 0-130.219 21.44-132.16 22.336-2.773 1.301-4.843 3.712-5.696 6.635s-.427 6.059 1.173 8.661c13.184 21.227 54.464 139.115 62.4 167.872a10.665 10.665 0 0 0 10.283 7.829h64c5.888 0 10.667-4.779 10.667-10.667v-192a10.657 10.657 0 0 0-10.667-10.666zm-10.666 192h-45.355c-10.112-32.939-39.979-118.827-56.64-154.325 16.277-5.525 51.243-15.019 101.995-16.213V309.33z" fill="#43D0F7" opacity="1" data-original="#43D0F7" className=""></path></g></svg>
          </div>
          <div className="md:mt-0 mt-24 md:block flex  justify-center flex-col md:text-start text-center">
            <h1 className="text-[36px] font-semibold pb-1">
              Customer Centric
            </h1>
            <p className="text-[18px] font-light leading-[32px] tracking-wider pb-5">
              We are committed to delivering exceptional customer experiences
              through our solutions, ensuring that your users are at the heart
              of everything we do, and that they are provided with the tools and
              experiences they need to thrive in the digital world.
            </p>
          </div>

        </motion.div>
      </div>
      <div className="absolute bottom-[150px] left-0 w-full h-[1px] bg-[rgba(238,238,238,0.1)] -z-[1]"></div>
    </section>
  );
};

export default Offers;
