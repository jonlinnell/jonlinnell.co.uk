import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteData: () => ({
    title: 'Jon Linnell',
  }),
  getRoutes: () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/cv',
      component: 'src/containers/CV',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()

    return html
  },
  Document: ({
    Html,
    Head,
    Body,
    children,
    renderMeta,
  }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
