import cn from "classnames";

const baseStyles = cn("text-brand-primary", "mb-2", "mt-3", "font-thin");

export default function Heading({ variant, children, className }) {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={cn(baseStyles, className, "text-4xl", "py-2", "md:py-4")}
          children={children}
        />
      );
    case "h2":
      return <h2 className={cn(baseStyles, className, "text-3xl")} children={children} />;
    case "h3":
      return <h3 className={cn(baseStyles, className, "text-2xl")} children={children} />;
    case "h4":
      return <h4 className={cn(baseStyles, className, "text-xl")} children={children} />;
    case "h5":
      return <h5 className={cn(baseStyles, className, "text-lg")} children={children} />;
    default:
      console.error(`Unknown variant: ${variant}`);
      return <span className="bg-red-600">ERROR</span>;
  }
}
