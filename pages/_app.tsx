import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Bangers, Raleway } from "next/font/google";
import "../styles/globals.css";

const raleway = Raleway({
  weight: ["200", "400", "700"],
  display: "swap"
});

const bangers = Bangers({
  weight: "400"
});

declare global {
  interface Window {
    fbAsyncInit: any;
    FB: any;
    dataLayer: any;
    $: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Component {...pageProps} />

      <Script id="animation-script" strategy="lazyOnload">
        {`
          $("#astronaut")
            .sprite({ fps: 30, no_of_frames: 1 })
            .spRandom({ top: 30, bottom: 200, left: 30, right: 200 });
        `}
      </Script>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Y9QYJ4E3DC"
      />

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "j6kekybaoh");
        `}
      </Script>

      {/* Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-Y9QYJ4E3DC");
        `}
      </Script>
    </>
  );
}
