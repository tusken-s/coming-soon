import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/404.module.css';

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

const NotFound: NextPage = () => {
  useEffect(() => {
    // Initialize jQuery animations after the component mounts
    if (typeof window !== 'undefined') {
      // Import jQuery and Spritely dynamically on the client side
      import('jquery').then((jquery) => {
        window.jQuery = window.$ = jquery.default;
        
        // Import Spritely script
        const script = document.createElement('script');
        script.src = '/js/spritely.min.js';
        script.async = true;
        script.onload = () => {
          // Initialize animations
          window.jQuery("#astronaut")
            .sprite({ fps: 30, no_of_frames: 1 })
            .spRandom({ top: 30, bottom: 200, left: 30, right: 200 });
          window.jQuery(".space").pan({ fps: 40, speed: 1, dir: "right", depth: 50 });
        };
        document.body.appendChild(script);
      });
    }
  }, []);

  return (
    <div className="space">
      <Head>
        <title>Page not found ! | Tuskens</title>
        <meta content="Creativity & Beyond !" name="title" />
        <meta content="Tuskens" name="author" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          name="description"
        />
        <meta content="Page not found ! | Tuskens" property="og:title" />
        <meta
          content="Page not found... but, anyway, Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          property="og:type"
        />
        <meta content="https://tuskens.com" property="og:url" />
        <meta content="/favicon-32x32.png" property="og:image" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>

      <div className={styles.container}>
        <div id="astronaut" className={styles.astronaut}>
          <Image 
            className={styles.logo} 
            src="/img/android-chrome-192x192.png" 
            alt="Logo" 
            width={192} 
            height={192} 
          />
          <div className={styles.text1}>Houston,<br />we have a<br />problem!</div>
          <div className={styles.text2}>Error 404!</div>
          <div className={styles.text3}>
            The universe<br />you are looking for<br />doesn't exist
          </div>
          <div className={styles.text4}>Try to visit another dimension</div>
          <div className={styles.text5}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <Link href="/privacy-policy">Privacy policy</Link>|
        <Link href="/terms">Terms & conditions</Link>
        <br />
        Tuskens ©,{' '}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default NotFound;