import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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

      <>
        <div className="relative w-[730px] h-[650px] bg-[url('../public/img/astronaut.png')] bg-no-repeat bg-transparent ml-[10%] top-[20%] scale-[80%]">
          <div className="absolute top-[100px] left-[30px] font-[Bangers] text-[30px] text-[#393939] leading-[28px]">
            Houston,
            <br />
            we have a<br />
            problem!
          </div>
          <div className="absolute top-[5px] left-[95px] font-[Bangers] text-[90px] text-[#2d2d2d] w-[380px] pr-[10px]">
            Error 404!
          </div>
          <div className="absolute top-[75px] left-[330px] font-[Bangers] text-[38px] text-[#393939] leading-[30px] text-right w-[310px] pr-[2px]">
            The universe
            <br />
            you are looking for
            <br />
            doesn't exist
          </div>
          <div className="absolute top-[180px] left-[392px] font-[Bangers] text-[30px] text-[#393939] uppercase">
            Try to visit another dimension
          </div>
          <div className="absolute top-[230px] left-[450px] font-[Raleway] text-[16px] text-[#393939] uppercase">
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

export default NotFound;
