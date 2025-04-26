import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="facebook-domain-verification"
          content="xcsktjg7mkogiqp2gb3jmxvkzwt0qs"
        />
        <meta content="Tuskens" name="author" />
        <meta content="https://tuskens.com" property="og:url" />
        <meta content="/favicon-32x32.png" property="og:image" />
        <link
          href="/img/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/img/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/img/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />

        <link href="/site.webmanifest" rel="manifest" />
        <meta content="#000" name="theme-color" />
      </Head>

      <body className="text-gray-50 font-[Raleway] h-full w-full overflow-y-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
