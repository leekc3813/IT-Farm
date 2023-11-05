import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          type='text/javascript'
          src='//dapi.kakao.com/v2/maps/sdk.js?appkey=e2d0f62bb57fb90b0596f6376a3fa842&autoload=false'
         />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
