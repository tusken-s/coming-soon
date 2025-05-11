import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface FooterProps {
  showStatus?: boolean;
  isFixed?: boolean;
}

const Footer: FC<FooterProps> = ({ showStatus = false, isFixed = true }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <footer
      className={`w-full ${isFixed ? "fixed bottom-[50px] opacity-25 hover:opacity-100 transition-all duration-600 ease-in-out" : "mb-10"} flex justify-center`}
    >
      <div className="text-center text-gray-50 text-sm font-light cursor-help">
        {showStatus ? (
          <iframe
            src="https://tuskens.instatus.com/embed-status/dark-sm"
            width="230"
            height="60"
            frameBorder="0"
            scrolling="no"
            className="mx-auto"
          />
        ) : (
          <></>
        )}
        <div className="flex justify-center w-full">
          {path === "/privacy-policy" ? (
            <>
              <Link
                className="w-fit text-yellow-300 mx-[25px] leading-[2] no-underline"
                href="/"
              >
                Home
              </Link>
              |
              <Link
                className="w-fit text-yellow-300 mx-[25px] leading-[2] no-underline"
                href="/terms"
              >
                Terms & conditions
              </Link>
            </>
          ) : path === "/terms" ? (
            <>
              <Link
                className="w-fit text-yellow-300 mx-[25px] leading-[2] no-underline"
                href="/"
              >
                Home
              </Link>
              |
              <Link
                className="w-fit text-yellow-300 mx-[25px] leading-[2] no-underline"
                href="/privacy-policy"
              >
                Privacy policy
              </Link>
            </>
          ) : (
            <>
              <Link
                className="w-fit text-yellow-300 mx-[25px] leading-[2] no-underline"
                href="/privacy-policy"
              >
                Privacy policy
              </Link>
              |
              <Link
                className="w-fit text-yellow-300 mx-[25px] leading-[2] no-underline"
                href="/terms"
              >
                Terms & conditions
              </Link>
            </>
          )}
        </div>
        <p>Tuskens ©, {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
