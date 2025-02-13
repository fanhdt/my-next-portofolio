import StarIcon from "@/assets/icons/star.svg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  spinDuration,
  shouldSpin = false,
}: PropsWithChildren<{ size: number; rotation: number; shouldOrbit?: boolean; orbitDuration?: string; spinDuration?: string; shouldSpin?: boolean }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 a">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: `${orbitDuration}`,
        }}
      >
        <div className="flex items-start justify-start " style={{ width: `${size}px`, height: `${size}px`, transform: `rotate(${rotation}deg)` }}>
          <div className={twMerge(shouldSpin === true && "animate-spin [animation-duration:10s]")} style={{ animationDuration: `${spinDuration}` }}>
            <div
              className=" inline-flex "
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
