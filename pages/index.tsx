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

      <aside className="h-[25vh] mb-10"></aside>
      <div className="h-[280px] w-[55%] flex mx-auto">
        <div className="w-[35%] h-full border-r border-stone-700 flex justify-center items-center">
          <Image
            width={192}
            height={192}
            alt="Logo"
            src="/img/android-chrome-192x192.png"
            className="mr-14"
          />
        </div>
        <div className="w-[65%] h-full ml-8">
          <h1 className="font-[Bangers] text-yellow-300 text-[70px] font-extrabold -mb-6">
            Our website
          </h1>
          <h2 className="font-[Bangers] text-yellow-300 text-[40px] -mb-2">
            is coming soon.
          </h2>
          <p className="text-[16px] italic my-5">
            In the mean time connect with us with the information below.
          </p>
          <p className="text-gray-50 leading-[normal]">
            We are a digital house that delivers a wide range of high-tech
            services and solutions for businesses worldwide.
          </p>
          <ul className="w-full mt-5">
            <li className="clear-both w-full">
              <p className="flex justify-between w-[60%]">
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
  );
};

export default Home;
