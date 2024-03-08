import React from "react";
import Logo from "./logo";
import ThemeToggler from "./theme-toggler";
import CreateContact from "./create-contact";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 bg-background">
      <div className="container flex items-center justify-between h-[10dvh]">
        <Logo />
        <div className="flex items-center gap-3">
          <ThemeToggler />
          <CreateContact />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
