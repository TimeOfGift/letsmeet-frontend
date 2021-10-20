import "./button.scss";

const Button = ({ className, text = "Join now", handleClick }) => {
  return (
    <button className={`generalBtn ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
