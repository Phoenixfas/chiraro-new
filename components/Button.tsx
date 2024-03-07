import Link from "next/link";
import React from "react";

const Button = ({
  right,
  href,
  name,
  className,
}: {
  right: boolean;
  href: string;
  name: string;
  className?: string

}) => {
  return (
    <div
      className={`w-full my-[20px] flex ${right ? "md:justify-start" : "md:justify-center px-6"
        }
        } justify-center ${className}`}
    >
      {/* text-[21px] font-bold px-[50px] py-5  */}
      <Link
        href={href}
        className=" rounded-[100rem] relative px-[50px] sm:px-[60px] py-[15px] button button-bg overflow-hidden text-[20px] md:text-[25px] font-semibold flex justify-center text-center"
      >
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default Button;
