import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const Home = () => {
  useEffect(() => {
    // Load jQuery and Spritely
    const loadScripts = async () => {
      if (typeof window !== 'undefined') {
        const $ = await import('jquery');
        await import('/public/js/spritely.min.js');
        
        // Initialize Spritely
        $('#astronaut')
          .sprite({ fps: 30, no_of_frames: 1 })
          .spRandom({ top: 30, bottom: 200, left: 30, right: 200 });
        $('.space').pan({ fps: 40, speed: 0.5, dir: 'right', depth: 50 });
      }
    };
    
    loadScripts();
    
    // Facebook SDK initialization
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v10.0',
      });
    };
    
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-Y9QYJ4E3DC');
    
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Tuskens | Creativity & Beyond !</title>
        <meta
          name="facebook-domain-verification"
          content="xcsktjg7mkogiqp2gb3jmxvkzwt0qs"
        />
        <meta content="Creativity & Beyond !" name="title" />
        <meta content="Tuskens" name="author" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          name="description"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <meta content="Tuskens | Creativity & Beyond !" property="og:title" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          property="og:type"
        />
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Raleway:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/css/coming-soon.css" rel="stylesheet" type="text/css" />
        
        <style jsx>{`
          body {
            background: black;
          }
        `}</style>
      </Head>

      <body className="space">
        <div id="shim"></div>
        <div id="content">
          <div className="logo_box">
            <h1>
              <img className="logo" alt="Logo" src="/img/android-chrome-192x192.png" />
            </h1>
          </div>
          <div className="main_box">
            <h2>
              <strong>Our website</strong><br />is coming soon.
              <span>
                <br />In the mean time connect with us with the information below.
              </span>
            </h2>
            <p>
              We are a digital house that delivers a wide range of high-tech
              services and solutions for businesses worldwide.
            </p>
            <ul className="info">
              <li>
                <p className="social">
                  <a
                    className="gh"
                    href="https://github.com/tusken-s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="GitHub logo" src="/img/github.svg" />
                  </a>
                  <a
                    className="li"
                    href="https://www.linkedin.com/company/tuskens"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Linkedin logo" src="/img/linkedin.svg" />
                  </a>
                  <a
                    className="tw"
                    href="https://twitter.com/join_tusken_s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Twitter logo" src="/img/twitter.svg" />
                  </a>
                  <a
                    className="fb"
                    href="https://www.facebook.com/join.tusken.s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Facebook logo" src="/img/facebook.svg" />
                  </a>
                  <a
                    className="im"
                    href="https://www.instagram.com/tusken.s/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Instagram logo" src="/img/instagram.svg" />
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          {/* Status badge */}
          <div>
            <iframe
              src="https://tuskens.instatus.com/embed-status/dark-sm"
              width="230"
              height="61"
              frameBorder="0"
              scrolling="no"
              style={{ border: 'none' }}
            >
            </iframe>
          </div>
          <Link href="/privacy-policy">Privacy policy</Link>|
          <Link href="/terms">Terms & conditions</Link>
          <br />
          Tuskens ©,
          {new Date().getFullYear()}
        </footer>
        
        {/* Load Facebook SDK for JavaScript */}
        <div id="fb-root"></div>
        <Script strategy="lazyOnload" src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js" />
        
        {/* Your Chat Plugin code */}
        <div
          className="fb-customerchat"
          data-attribution="setup_tool"
          data-page_id="103326721561833"
          data-theme_color="#ffe400"
        ></div>
        
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
      </body>
    </>
  );
};

export default Home;