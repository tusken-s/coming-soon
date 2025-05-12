import { FC } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header: FC = () => {
  return (
    <header className="w-full">
      <div className="my-6 mx-10 opacity-0 hover:opacity-100 transition-all duration-600 ease-in-out">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
      <div className="my-6 mx-10">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
