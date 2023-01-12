import "./ButtonFilled.scss";

const ButtonFilled = ({ children, className, ...rest }) => {
  return (
    <button className={`button-filled ${className}`} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default ButtonFilled;
