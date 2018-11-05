import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <h1>Hi, I&apos;m Jon Linnell.</h1>
    <p>I build websites, full-stack web apps, take photos, manage projects, and cook excellent food.</p>
    <img src={logoImg} alt="" style={{ display: 'block', margin: '0 auto' }} />
  </div>
))
