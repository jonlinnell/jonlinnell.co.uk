import classNames from "classnames";

export const Paragraph = ({ children }) => (
  <p className={classNames(["my-5", "md:text-lg", "md:leading-loose"])}>{children}</p>
);
