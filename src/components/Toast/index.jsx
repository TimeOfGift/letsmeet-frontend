import React, {useState, useEffect} from 'react'
import './toast.scss';

const types = {
  error: {
    color: "red",
    backgroundColor: "#fe02000f",
    borderLeft: "5px solid red",
  },
  success: {
    color: "green",
    backgroundColor: "#0080001a",
    borderLeft: "5px solid green",
  },
};
const Toast = ({type, header, message}) => {

const [showToast, setShowToast] = useState(false);

// the empty array as the second argument
// ensures it is fired only after component mount.

useEffect(() => {
  setShowToast(true);

  // Hides the message after 2 default seconds (configurable)
  const t = setTimeout(() => setShowToast(false), 3000);
  return () => clearTimeout(t);
}, []);

  return (
    <>
   {
   showToast && <div className="toast" style={types[type]}>
      <div className="header">{header}</div>
      <p className="message">{message}</p>
    </div>
    }
    </>
  );
}

export default Toast;
