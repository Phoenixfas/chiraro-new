import React from "react";

const Offers = () => {
  return (
    <section
      id="offers"
      className="w-full items-center justify-center flex relative"
    >
      <div className="w-[calc(100%-200px)]  pt-[250px] pl-[80px] flex flex-col gap-[50px] mb-20 md:mb-0 items-start justify-start">
        <div className="w-[90%] lg:w-[750px] h-fit pl-[100px] pr-[40px] py-5 rounded-xl bg-[rgba(47,64,75,1)] relative">
          <div className="absolute top-[50%] left-[-20%] w-[300px] h-[300px] bg-[#43D0F7] opacity-30 blur-[100px]">
            {" "}
          </div>
          <div className="absolute top-[10%] rounded-full border-[4px] left-[-8%] w-[130px] h-[130px] border-[#5FE0F9] bg-[#2F404B] flex justify-center items-center">
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
          <h1 className="text-[36px] font-semibold pb-1">Secure</h1>
          <p className="text-[18px] font-light leading-[32px] tracking-wider pb-5">
            Building a foundation of trust, our commitment to security goes
            beyond mere protection it&apos;s about constructing robust digital
            fortresses that safeguard your data and assets, ensuring a resilient
            defense against the evolving landscape of cyber threats.
          </p>
        </div>
        <div className="w-[90%] lg:w-[750px] h-fit mr-[100px] pl-[40px] py-5 rounded-xl bg-[rgba(47,64,75,1)] relative self-end">
          <div className="absolute top-[50%] right-[-20%] w-[300px] h-[300px] bg-[#43D0F7] opacity-30 blur-[100px]"></div>
          <div className="absolute top-[10%] rounded-full border-[4px] right-[-8%] w-[130px] h-[130px] border-[#5FE0F9] bg-[#2F404B] flex justify-center items-center">
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
          <div className="w-[85%]">
            <h1 className="text-[36px] font-semibold pb-1">Innovative</h1>
            <p className="text-[18px] font-light leading-[32px] tracking-wider pb-5">
              Dedicated to the relentless pursuit of innovation, we specialize
              in transforming your visionary ideas into tangible, cutting-edge
              digital realities that redefine the future of technology and
              business
            </p>
          </div>
        </div>
        <div className="w-[90%] lg:w-[750px] h-fit pl-[100px] pr-[40px] py-5 rounded-xl bg-[rgba(47,64,75,1)] relative">
          <div className="absolute top-[50%] left-[-20%] w-[300px] h-[300px] bg-[#43D0F7] opacity-30 blur-[100px]">
            {" "}
          </div>
          <div className="absolute top-[10%] rounded-full border-[4px] left-[-8%] w-[130px] h-[130px] border-[#5FE0F9] bg-[#2F404B] flex justify-center items-center">
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
          <h1 className="text-[36px] font-semibold pb-1">Secure</h1>
          <p className="text-[18px] font-light leading-[32px] tracking-wider pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel qui
            reprehenderit nemo iusto harum aliquam, animi asperiores natus,
            excepturi inventore impedit veritatis quae fuga. Quod, fugit? Animi
            eligendi doloremque nihil quis minima veniam deserunt dignissimos.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[150px] left-0 w-full h-[1px] bg-[rgba(238,238,238,0.1)] -z-[1]"></div>
    </section>
  );
};

export default Offers;
