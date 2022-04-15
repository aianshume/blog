import '@css/prism-a11y-dark.css'
import '@css/reset.css'
import 'inter-ui/inter.css'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
