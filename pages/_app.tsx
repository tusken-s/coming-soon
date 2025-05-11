import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Bangers, Raleway } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";

const raleway = Raleway({
  weight: ["200", "400", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const bangers = Bangers({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
});

declare global {
  interface Window {
    dataLayer: unknown;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    const isStaticPage =
      pathname === "/terms" || pathname === "/privacy-policy";
    if (isStaticPage) document.body.classList.add("no-bg-animation");
    else document.body.classList.remove("no-bg-animation");
    return () => {
      document.body.classList.remove("no-bg-animation");
    };
  }, [pathname]);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <style jsx global>{`
          html {
            font-family: ${raleway.variable};
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h5 {
            font-family: ${bangers.variable};
          }
        `}</style>
      </Head>

      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>

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
