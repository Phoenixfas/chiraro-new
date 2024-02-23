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
      <Link
        href={href}
        className="text-[21px] font-bold px-[50px] py-5 button-bg rounded-[16px] relative"
      >
        {name}
      </Link>
    </div>
  );
};

export default Button;
