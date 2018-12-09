import React, { Fragment } from 'react'
import { ServerStyleSheet } from 'styled-components'

import {
  getBasics,
  getContacts,
  getSkills,
  getSummary,
  getEmploymentHistory,
} from './src/lib/cv'

const netlifyAuthRedirectScript = 'if (window.netlifyIdentity) { window.netlifyIdentity.on(\'init\', (user) => { if (!user) { window.netlifyIdentity.on(\'login\', () => { document.location.href = \'/admin/\' }) } }) }'

export default {
  siteRoot: 'https://jonlinnell.co.uk/',
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
      getData: async () => ({
        basics: await getBasics(),
        contacts: await getContacts(),
        skills: await getSkills(),
        employmentHistory: await getEmploymentHistory(),
        summary: await getSummary(),
      }),
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        {renderMeta.styleTags}
      </Head>
      <Body>
        <Fragment>
          { children }
          <script dangerouslySetInnerHTML={{ __html: netlifyAuthRedirectScript }} />
        </Fragment>
      </Body>
    </Html>
  ),
}
