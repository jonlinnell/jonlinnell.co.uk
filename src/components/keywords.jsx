import classNames from "classnames";

const commonStyles = ["mr-1"];
const tagStyles = {
  js: ["text-yellow-500"],
  ts: ["text-blue-600"],
  general: ["text-violet-300"],
  unix: ["text-lime-500"],
  ai: ["text-indigo-300"],
};

export default function Keywords({ children: keywords, className }) {
  return (
    <div className={className}>
      {keywords.map((keyword) => (
        <span key={keyword} className={classNames(commonStyles, tagStyles[keyword])}>
          {keyword}
        </span>
      ))}
    </div>
  );
}
