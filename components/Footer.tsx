import Link from "next/link";

interface FooterProps {
  showStatusBadge?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showStatusBadge = false }) => {
  return (
    <footer>
      {showStatusBadge && (
        <div>
          <iframe
            src="https://tuskens.instatus.com/embed-status/dark-sm"
            width="230"
            height="61"
            frameBorder="0"
            scrolling="no"
            className="border-none"
          ></iframe>
        </div>
      )}
      <Link href="/privacy-policy">Privacy policy</Link>|
      <Link href="/terms">Terms & conditions</Link>
      <br />
      Tuskens ©, {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
