import "./Form.scss";

const Form = ({ className, children, ...rest }) => {
  return (
    <form className={`form ${className}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
