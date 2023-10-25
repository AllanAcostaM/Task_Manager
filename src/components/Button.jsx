const Button = () => {
  const onClickHandler = () => {
    console.log("The user clicked the button");
  };
  return <button onClick={onClickHandler}>Button</button>;
};

export default Button;
