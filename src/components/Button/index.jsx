import "./button.scss";

const Button = ({ className, text = "Join now", handleClick, textColor, radius, bgColor, borderColor }) => {

  const style = {
    color: textColor,
    borderRadius: radius,
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
  };

  return (
    <button className={`generalBtn ${className}`} onClick={handleClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
