import React from 'react';

/* eslint-disable react/jsx-filename-extension */
export default {
  getSiteData: () => ({
    title: 'Jon Linnell',
  }),
  plugins: ['react-static-plugin-styled-components'],
  siteRoot: 'https://jonlinnell.co.uk',
  Document: ({
    Html, Head, Body, children, siteData
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{ siteData.title }</title>
        <link
          rel="preload stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:200,300"
          as="style"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};
