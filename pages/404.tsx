import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.css";
import Footer from "../components/Footer";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page not found ! | Tuskens</title>
        <meta content="Creativity & Beyond !" name="title" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          name="description"
        />
        <meta content="Page not found ! | Tuskens" property="og:title" />
        <meta
          content="Page not found... but, anyway, Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          property="og:type"
        />
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
          <div className={styles.text1}>
            Houston,
            <br />
            we have a<br />
            problem!
          </div>
          <div className={styles.text2}>Error 404!</div>
          <div className={styles.text3}>
            The universe
            <br />
            you are looking for
            <br />
            doesn't exist
          </div>
          <div className={styles.text4}>Try to visit another dimension</div>
          <div className={styles.text5}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
