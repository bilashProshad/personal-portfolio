import "./TextArea.scss";

const TextArea = ({ className, ...rest }) => {
  return <textarea className={`textArea ${className}`} {...rest} rows="5" />;
};

export default TextArea;
