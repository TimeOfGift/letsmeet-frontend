import "./button.scss";
import Messaging from "react-cssfx-loading/lib/Messaging";

const Button = ({
  className,
  text = "Join now",
  handleClick,
  textColor,
  radius,
  bgColor,
  borderColor,
  loading = false,
}) => {
  const style = {
    color: textColor,
    borderRadius: radius,
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    cursor: loading ? 'default' : 'pointer',
    padding: loading && '18px 40px'
  
  };

  return (
    <button
      className={`generalBtn ${className}`}
      onClick={handleClick}
      style={style}
      disabled={loading}
    >
      {loading ? (
        <Messaging color="#ffffff" width="10px" height="10px" duration=".51s" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
