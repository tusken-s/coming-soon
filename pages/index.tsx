import Head from "next/head";
import Footer from "../components/Footer";

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

      <body>
      <div id="shim"></div>
      <div id="content" className="space">
        <div className="logo_box">
          <h1>
            <img
              className="logo"
              alt="Logo"
              src="/img/android-chrome-192x192.png"
            />
          </h1>
        </div>
        <div className="main_box">
          <h2>
            <strong>Our website</strong>
            <br />
            is coming soon.
            <span>
                <br />
                In the mean time connect with us with the information below.
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
      <Footer showStatusBadge={true} />
      </body>
    </>
  );
};

export default Home;
