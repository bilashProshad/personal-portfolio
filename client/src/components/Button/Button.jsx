import "./Button.scss";

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={`button ${className}`} {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
