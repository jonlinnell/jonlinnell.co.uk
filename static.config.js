import React from 'react';

const { DEV_SUBDOMAIN, NODE_ENV } = process.env;

let trackingId;

if (DEV_SUBDOMAIN) {
  trackingId = 'UA-137380850-2';
} else if (!DEV_SUBDOMAIN && NODE_ENV === 'production') {
  trackingId = 'UA-137380850-3';
} else {
  trackingId = undefined;
}

/* eslint-disable react/jsx-filename-extension */
export default {
  getSiteData: () => ({
    title: 'Jon Linnell',
    trackingId,
  }),
  plugins: ['react-static-plugin-styled-components'],
  siteRoot: `https://${DEV_SUBDOMAIN ? 'dev.' : ''}jonlinnell.co.uk`,
  Document: ({
    Html, Head, Body, children, siteData,
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteData.title}</title>
        <link
          rel="preload stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:200,300"
          as="style"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ed544a" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
};
