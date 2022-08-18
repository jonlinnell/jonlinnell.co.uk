export default function InlineHighlight({ children, contrast }) {
  return (
    <span className={contrast ? "text-brand-contrast" : "text-brand-primary"} children={children} />
  );
}
