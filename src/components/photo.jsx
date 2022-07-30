import cn from "classnames";
import Image from "next/image";

export default function Photo({ title, subtitle = "", details, h, w, src, className }) {
  return (
    <div
      className={cn(
        ["flex", "flex-col", "md:flex-row", "flex-col-reverse", "md:max-w-screen-xl"],
        className
      )}
    >
      <div className={cn(["md:w-3/12", "md:justify-right", "text-right", "md:p-8", "md:pt-0"])}>
        <h1 className={cn(["text-4xl", "font-thin"])}>{title}</h1>
        <p className={cn(["text-gray-400", "font-light"])}>{subtitle}</p>
        <p className={cn(["text-gray-400", "font-light", "text-sm", "italic"])}>{details}</p>
      </div>
      <div className={cn(["md:w-9/12"])}>
        <Image src={`/photo/${src}`} width={w} height={h} />
      </div>
    </div>
  );
}
