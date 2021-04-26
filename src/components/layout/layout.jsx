import Head from 'next/head';
import Link from 'next/link';
import { css } from '@emotion/react';

const containerStyles = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  margin: none;
`;

const mainContentContainerStyles = css`
  flex-grow: 1;
`;

export default function Layout({ children }) {
  const { theme, toggleDarkMode } = useThemeContext();

  return (
    <>
      <Head>
        <title>Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <div css={containerStyles}>
        <header>
          <Link href="/">Jon Linnell</Link>
          <nav>
            <Link href="/about">about me</Link>
            <button onClick={() => {}}>D</button>
          </nav>
        </header>

        <main css={mainContentContainerStyles}>{children}</main>

        <footer>&copy; {new Date().getFullYear()} Jon Linnell</footer>
      </div>
    </>
  );
}
