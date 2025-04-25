import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Any additional head elements that need to be included in every page */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}