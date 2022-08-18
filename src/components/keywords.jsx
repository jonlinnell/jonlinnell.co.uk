import classNames from "classnames";

const commonStyles = [];
const tagStyles = {
  js: ["text-yellow-500"],
  general: ["text-violet-300"],
};

export default function Keywords({ children: keywords }) {
  return (
    <div>
      {keywords.map((keyword, i) => (
        <span key={keyword} className={classNames(commonStyles, tagStyles[keyword])}>
          {keyword}
        </span>
      ))}
    </div>
  );
}
