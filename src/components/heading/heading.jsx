export default function Heading({ variant, children }) {
  switch (variant) {
    case 'h1':
      return <h1 children={children} />;
    case 'h2':
      return <h2 children={children} />;
    case 'h3':
      return <h3 children={children} />;
    case 'h4':
      return <h4 children={children} />;
    case 'h5':
      return <h5 children={children} />;
    default:
      console.error(`Unknown variant: ${variant}`);
      return <span>ERROR</span>;
  }
}
