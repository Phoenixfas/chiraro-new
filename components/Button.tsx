import Link from "next/link";
import React from "react";

const Button = ({
  right,
  href,
  name,
}: {
  right: boolean;
  href: string;
  name: string;
}) => {
  return (
    <div
      className={`w-full my-[20px] flex ${
        right ? "justify-start" : "justify-center px-6"
      }`}
    >
      {/* text-[21px] font-bold px-[50px] py-5  */}
      <Link
        href={href}
        className=" rounded-[100rem] relative btn-22 button button-bg overflow-hidden text-[25px] font-semibold"
      >
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default Button;
