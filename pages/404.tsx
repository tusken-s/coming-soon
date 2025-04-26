import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import "../styles/404.css";

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

      <>
        <div id="astronaut">
          <div id="text_1">
            Houston,
            <br />
            we have a<br />
            problem!
          </div>
          <div id="text_2">Error 404!</div>
          <div id="text_3">
            The universe
            <br />
            you are looking for
            <br />
            doesn't exist
          </div>
          <div id="text_4">Try to visit another dimension</div>
          <div id="text_5">
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
      </>

      <Footer />
    </>
  );
};

export default NotFound;
