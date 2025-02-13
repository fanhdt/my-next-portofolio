import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export const Card = ({ className, children, ...other }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden outline outline-2 outline-white/20 after:pointer-events-none", className)} {...other}>
      <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
      <div className="absolute inset-0 z-10 pointer-events-none outline outline-2 outline-offset-2 outline-white/20 rounded-3xl" />
      <div className="">{children}</div>
    </div>
  );
};
