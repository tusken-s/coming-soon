import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

const Terms = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Tuskens | Terms & conditions</title>
        <meta
          name="facebook-domain-verification"
          content="xcsktjg7mkogiqp2gb3jmxvkzwt0qs"
        />
        <meta content="Terms & conditions" name="title" />
        <meta content="Tuskens" name="author" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          name="description"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <meta content="Tuskens | Terms & conditions" property="og:title" />
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
        <link href="/css/docs.css" rel="stylesheet" type="text/css" />
        
        <style jsx>{`
          body {
            background: black;
          }
        `}</style>
      </Head>

      <div className="space">
        {/* Terms & Conditions */}
        <article>
          <div style={{ zIndex: 100 }}>
            <h1 className="big" style={{ marginTop: '10px' }}>Terms &amp; Conditions</h1>
            <p>Updated at 2021-11-14</p>
            <br />
            <h1>General Terms</h1>
            <p>
              <span>
                By accessing and placing an order with us, you confirm that
                you are in agreement with and bound by the terms of service
                contained in the Terms &amp; Conditions outlined below. These terms
                apply to the entire website and any email or other type of
                communication between you and us. <br /><br />
                Under no circumstances shall Tuskens team be liable for any direct,
                indirect, special, incidental or consequential damages, including,
                but not limited to, loss of data or profit, arising out of the use,
                or the inability to use, the materials on this site, even if
                our team or an authorized representative has been advised of the
                possibility of such damages. If your use of materials from this site
                results in the need for servicing, repair or correction of equipment
                or data, you assume any costs thereof. <br /><br />
                we will not be responsible for any outcome that may occur
                during the course of usage of our resources. We reserve the rights
                to change prices and revise the resources usage policy in any
                moment.
              </span>
            </p>
            <p><br /></p>
            <h1>License</h1>
            <p>
              <span>
                Tuskens grants you a revocable, non-exclusive, non- transferable,
                limited license to download, install and use our service strictly in
                accordance with the terms of this Agreement. <br /><br />
                These Terms &amp; Conditions are a contract between you and Tuskens
                (referred to in these Terms &amp; Conditions as "Tuskens", "us",
                "we" or "our"), the provider of the Tuskens website and the services
                accessible from the Tuskens website (which are collectively referred
                to in these Terms &amp; Conditions as the "Tuskens Service").
                <br /><br />
                You are agreeing to be bound by these Terms &amp; Conditions. If you
                do not agree to these Terms &amp; Conditions, please do not use the
                Service. In these Terms &amp; Conditions, "you" refers both to you
                as an individual and to the entity you represent. If you violate any
                of these Terms &amp; Conditions, we reserve the right to cancel your
                account or block access to your account without notice.
              </span>
            </p>
            <p><br /></p>
            <h1>Definitions and key terms</h1>
            <p>
              <span>For this Terms &amp; Conditions:</span>
            </p>
            <p><br /></p>
            <ul>
              <li>
                <span>
                  <strong>Cookie:</strong> small amount of data generated by a
                  website and saved by your web browser. It is used to identify your
                  browser, provide analytics, remember information about you such as
                  your language preference or login information.<br />
                </span>
              </li>
              <li>
                <span>
                  <strong>Company:</strong> when this policy mentions "Company,"
                  "we," "us," or "our," it refers to Tuskens MEA,
                  BP912, Sousse Bab bhar, 4000, Tunisia
                  that is responsible for your information under this Privacy
                  Policy.<br />
                </span>
              </li>
              <li>
                <span>
                  <strong>Country:</strong> where Tuskens or the owners/founders of
                  Tuskens are based, in this case is Tunisia.<br />
                </span>
              </li>
              <li>
                <span>
                  <strong>Customer:</strong> refers to the company, organization or
                  person that signs up to use the Tuskens Service to manage the
                  relationships with your consumers or service users.<br />
                </span>
              </li>
              <li>
                <span>
                  <strong>Device:</strong> any internet connected device such as a
                  phone, tablet, computer or any other device that can be used to
                  visit Tuskens and use the services.<br />
                </span>
              </li>
            </ul>
            {/* More content would go here - truncated for brevity */}
          </div>
        </article>
        
        <footer>
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
      </div>
    </>
  );
};

export default Terms;