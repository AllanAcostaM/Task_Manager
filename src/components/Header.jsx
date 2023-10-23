import Logo from "./Logo";
import Title from "./Title";

const Header = () => {
  return (
    <header>
        <Logo />
        <Title text= "Task Manager 3" small="A great application"/>
        <Title />
        </header>
  );
};

export default Header;