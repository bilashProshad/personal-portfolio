import "./ButtonFilled.scss";
import { BiLoaderAlt } from "react-icons/bi";

const ButtonFilled = ({ children, className, loading, ...rest }) => {
  return (
    <button
      className={`button-filled ${className}`}
      disabled={loading}
      {...rest}
    >
      <span>{loading ? <BiLoaderAlt /> : children}</span>
    </button>
  );
};

export default ButtonFilled;
