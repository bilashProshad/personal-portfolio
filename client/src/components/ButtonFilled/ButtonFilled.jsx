import "./ButtonFilled.scss";
import { BiLoaderAlt } from "react-icons/bi";

const ButtonFilled = ({ children, className, loading, ...rest }) => {
  return (
    <button
      className={`button-filled ${className}`}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <span>
          <BiLoaderAlt />
        </span>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default ButtonFilled;
