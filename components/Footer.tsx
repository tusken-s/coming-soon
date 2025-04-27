import { FC } from "react";
import Link from "next/link";

interface FooterProps {
  showStatusBadge?: boolean;
  isFixed?: boolean;
}

const Footer: FC<FooterProps> = ({ showStatusBadge = false, isFixed = true }) => {
  return (
    <footer className={`w-full ${isFixed ? 'fixed bottom-[50px]' : ''} flex justify-center`}>
      <div className="w-[25%] opacity-25 transition-all duration-600 ease-in-out text-center text-gray-50 text-sm font-light cursor-help hover:opacity-100">
        {showStatusBadge ? (
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
          <Link
            className="w-[50%] text-yellow-300 mx-[25px] leading-[2] no-underline"
            href="/privacy-policy"
          >
            Privacy policy
          </Link>
          |
          <Link
            className="w-[50%] text-yellow-300 mx-[25px] leading-[2] no-underline"
            href="/terms"
          >
            Terms & conditions
          </Link>
        </div>
        <p>Tuskens ©, {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
