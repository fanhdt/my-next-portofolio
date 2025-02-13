import { Fragment } from "react";
import { TechIcon } from "./Techicon";
import { twMerge } from "tailwind-merge";
export const ToolboxItems = ({ items, className, itemsWrapperClass }: { items: { title: string; iconType: React.ElementType }[]; className?: string; itemsWrapperClass?: string }) => {
  return (
    <div
      className={twMerge("flex py-0.5 ", className)}
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div className={twMerge("flex flex-none py-0.5 gap-6 pl-6", itemsWrapperClass)}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/20 rounded-lg">
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
