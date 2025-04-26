import React from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Tuskens | Privacy policy</title>
        <meta content="Privacy policy" name="title" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          name="description"
        />
        <meta content="Tuskens | Privacy policy" property="og:title" />
        <meta
          content="Tuskens is a digital house that delivers a wide range of high-tech services and solutions for businesses worldwide."
          property="og:type"
        />
        <link href="/css/docs.css" rel="stylesheet" type="text/css" />
      </Head>

      <>
        {/* Privacy policy */}
        <article>
          <div>
            <div>
              <div>
                <h1 className="big">Privacy Policy</h1>
                <p>Updated at 2021-11-14</p>
                <br />
                <h1>
                  <strong>Tuskens's</strong> Facebook app
                </h1>
                <p>
                  This Application collects some Personal Data from its Users.
                </p>
                <br />
                <p>
                  This document can be printed for reference by using the print
                  command in the settings of any browser.
                </p>
              </div>
              {/* /header */}

              <div>
                <h2>Owner and Data Controller</h2>
                <p>BP912, Sousse Bab bhar, 4000, Tunisia</p>
                <p>
                  <strong>Owner contact email:</strong> hello@tuskens.com
                </p>
              </div>

              <div>
                <h2>Types of Data collected</h2>

                <p>
                  The owner does not provide a list of Personal Data types
                  collected.
                </p>

                <p>
                  Complete details on each type of Personal Data collected are
                  provided in the dedicated sections of this privacy policy or
                  by specific explanation texts displayed prior to the Data
                  collection.
                  <br />
                  Personal Data may be freely provided by the User, or, in case
                  of Usage Data, collected automatically when using this
                  Application.
                  <br />
                  Unless specified otherwise, all Data requested by this
                  Application is mandatory and failure to provide this Data may
                  make it impossible for this Application to provide its
                  services. In cases where this Application specifically states
                  that some Data is not mandatory, Users are free not to
                  communicate this Data without consequences to the availability
                  or the functioning of the Service.
                  <br />
                  Users who are uncertain about which Personal Data is mandatory
                  are welcome to contact the Owner.
                  <br />
                  Any use of Cookies – or of other tracking tools – by this
                  Application or by the owners of third-party services used by
                  this Application serves the purpose of providing the Service
                  required by the User, in addition to any other purposes
                  described in the present document and in the Cookie Policy, if
                  available.
                </p>
                <p>
                  Users are responsible for any third-party Personal Data
                  obtained, published or shared through this Application and
                  confirm that they have the third party's consent to provide
                  the Data to the Owner.
                </p>
              </div>
            </div>
          </div>
        </article>

        <footer>
          <Link href="/privacy-policy">Privacy policy</Link>|
          <Link href="/terms">Terms & conditions</Link>
          <br />
          Tuskens ©,
          {new Date().getFullYear()}
        </footer>
      </>
    </>
  );
};

export default PrivacyPolicy;
