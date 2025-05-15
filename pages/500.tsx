import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

const ServerError: NextPage = () => {
  return (
    <>
      <Head>
        <title>Internal Server Error | Tuskens</title>
        <meta content="Creativity & Beyond !" name="title" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          name="description"
        />
        <meta content="Internal Server Error | Tuskens" property="og:title" />
        <meta
          content="Internal Server Error... but, anyway, Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          property="og:type"
        />
      </Head>

      <>
        <div
          className="relative w-[730px] h-[650px] bg-[url('../public/img/astronaut.png')] bg-no-repeat bg-transparent ml-[10%] top-[20%] scale-[80%] animate-[floatAstronaut_10s_ease-in-out_infinite]"
          style={
            {
              "--random-x1": `${Math.floor(Math.random() * 170) + 30}px`,
              "--random-y1": `${Math.floor(Math.random() * 170) + 30}px`,
              "--random-x2": `${Math.floor(Math.random() * 170) + 30}px`,
              "--random-y2": `${Math.floor(Math.random() * 170) + 30}px`,
              "--random-x3": `${Math.floor(Math.random() * 170) + 30}px`,
              "--random-y3": `${Math.floor(Math.random() * 170) + 30}px`,
            } as React.CSSProperties
          }
        >
          <div className="absolute top-[100px] left-[30px] font-[Bangers] text-[30px] text-gray-900 leading-[28px]">
            Houston,
            <br />
            we have a<br />
            problem!
          </div>
          <div className="absolute -top-[10px] left-[95px] font-[Bangers] text-[90px] text-gray-950 w-[380px] pr-[10px]">
            Error 500!
          </div>
          <div className="absolute top-[75px] left-[330px] font-[Bangers] text-[38px] text-gray-900 leading-[30px] text-right w-[310px] pr-[2px]">
            The server
            <br />
            encountered an
            <br />
            internal error
          </div>
          <div className="absolute top-[180px] left-[392px] font-[Bangers] text-[30px] text-gray-900 uppercase">
            Try to visit another dimension
          </div>
          <div className="absolute top-[230px] left-[450px] text-[16px] text-gray-900 uppercase">
            <ul>
              <li className="inline border-l-0 px-0 mr-[2em]">
                <Link
                  href="/"
                  className="text-[#6d6c6c] no-underline hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="inline border-l border-[#6d6c6c] pl-[2em] mr-[2em]">
                <Link
                  href="/contact"
                  className="text-[#6d6c6c] no-underline hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
};

export default ServerError;