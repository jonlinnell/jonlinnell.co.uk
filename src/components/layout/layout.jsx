import Head from 'next/head';
import Link from 'next/link';
import { css } from '@emotion/react';

const containerStyles = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 1.275rem;

  margin: 0;
`;

const mainContentContainerStyles = css`
  display: flex;
  flex: 1;
`;

const topNavStyles = (theme) => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const footerStyles = (theme) => css`
  text-align: center;
  font-family: ${theme.fonts.heading};
  color: ${theme.colours.secondary};
  font-weight: 200;
`;

const nameLinkStyles = (theme) => css`
  font-family: ${theme.fonts.heading};
  font-size: 1.75rem;
  color: ${theme.colours.secondary};
  text-decoration: none;

  flex-grow: 1;

  &:visited {
    color: ${theme.colours.secondary};
  }
`;

const navLinkStyles = (theme) => css`
  font-family: ${theme.fonts.heading};
  color: ${theme.colours.brand.darkest};
  text-decoration: none;

  &:visited {
    color: ${theme.colours.brand.darkest};
  }
`;

const NameLink = () => (
  <Link href="/" passHref>
    <a css={nameLinkStyles}>Jon Linnell</a>
  </Link>
);

const TopNav = ({ children }) => <header css={topNavStyles} children={children} />;

const NavLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a css={navLinkStyles}>{children}</a>
  </Link>
);

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <div css={containerStyles}>
        <TopNav>
          <NameLink />
          <nav>
            <NavLink href="/about">about me</NavLink>
            <button onClick={() => {}}>D</button>
          </nav>
        </TopNav>

        <main css={mainContentContainerStyles}>{children}</main>

        <footer css={footerStyles}>&copy; {new Date().getFullYear()} Jon Linnell</footer>
      </div>
    </>
  );
}
