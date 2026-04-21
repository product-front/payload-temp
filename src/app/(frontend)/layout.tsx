import React from 'react'
import './styles.css'

export const metadata = {
  description: 'Payload CMS template for Cloudflare Workers with D1 and R2.',
  title: 'Payload Cloudflare Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
