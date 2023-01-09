import "./Input.scss";

const Input = ({ type, className, ...rest }) => {
  return (
    <input type={type || "text"} className={`input ${className}`} {...rest} />
  );
};

export default Input;
