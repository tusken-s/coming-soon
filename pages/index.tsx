import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tuskens | Creativity & Beyond !</title>
        <meta content="Creativity & Beyond !" name="title" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          name="description"
        />
        <meta content="Tuskens | Creativity & Beyond !" property="og:title" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          property="og:type"
        />
      </Head>

      <>
        <div className="invisible w-full h-[45vh] mt-[-140px]"></div>
        <div className="w-[940px] h-[280px] mx-auto clear-both top-[-140px] static">
          <div className="w-[38%] float-left border-r border-[#303030] h-[280px] relative flex justify-center items-center">
            <Image
              width={192}
              height={192}
              alt="Logo"
              src="/img/android-chrome-192x192.png"
            />
          </div>
          <div className="w-[62%] float-left h-[95px] p-[25px]">
            <h2 className="font-[Bangers] text-[#ffe400] text-[40px] mb-[20px]">
              <strong className="font-[Bangers] text-[70px]">
                Our website
              </strong>
              <br />
              is coming soon.
              <span className="font-[Raleway] text-[#ffffff] text-[16px] leading-[26px] italic">
                <br />
                In the mean time connect with us with the information below.
              </span>
            </h2>
            <p className="text-[#ffffff]">
              We are a digital house that delivers a wide range of high-tech
              services and solutions for businesses worldwide.
            </p>
            <ul className="w-full float-left p-0 mt-[20px] mb-0">
              <li className="mb-[20px] clear-both float-left w-full">
                <p className="flex justify-between leading-[20px] w-[55%]">
                  <a
                    href="https://github.com/tusken-s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={28}
                      height={28}
                      alt="GitHub logo"
                      src="/img/github.svg"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tuskens"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={28}
                      height={28}
                      alt="Linkedin logo"
                      src="/img/linkedin.svg"
                    />
                  </a>
                  <a
                    href="https://twitter.com/join_tusken_s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={28}
                      height={28}
                      alt="Twitter logo"
                      src="/img/twitter.svg"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/join.tusken.s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={28}
                      height={28}
                      alt="Facebook logo"
                      src="/img/facebook.svg"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/tusken.s/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={28}
                      height={28}
                      alt="Instagram logo"
                      src="/img/instagram.svg"
                    />
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <Footer showStatusBadge />
      </>
    </>
  );
};

export default Home;
