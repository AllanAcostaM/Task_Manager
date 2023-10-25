import Logo from "./Logo";
import Title from "./Title";

import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <Logo />
      <Title text="Task Manager" small="My task application" />
    </header>
  );
};

export default Header;
