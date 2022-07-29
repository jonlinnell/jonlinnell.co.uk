import classNames from "classnames";

export default function Prose({ className, ...props }) {
  return <article className={classNames(className, ["prose", "dark:prose-invert"])} {...props} />;
}
