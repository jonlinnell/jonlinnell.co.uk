import cn from "classnames";

const baseStyles = cn(
  "text-brand-primary",
  "dark:text-brand-lightest",
  "mb-2",
  "mt-3",
  "font-extralight"
);

export default function Heading({ variant, children, extraClassNames }) {
  switch (variant) {
    case "h1":
      return <h1 className={cn(baseStyles, extraClassNames, "text-4xl")} children={children} />;
    case "h2":
      return <h2 className={cn(baseStyles, extraClassNames, "text-3xl")} children={children} />;
    case "h3":
      return <h3 className={cn(baseStyles, extraClassNames, "text-2xl")} children={children} />;
    case "h4":
      return <h4 className={cn(baseStyles, extraClassNames, "text-xl")} children={children} />;
    case "h5":
      return <h5 className={cn(baseStyles, extraClassNames, "text-lg")} children={children} />;
    default:
      console.error(`Unknown variant: ${variant}`);
      return <span className="bg-red-600">ERROR</span>;
  }
}
