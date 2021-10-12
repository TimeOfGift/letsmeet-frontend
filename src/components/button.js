export const Button = (props) => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};
