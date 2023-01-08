import "./RoundedIconHolder.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const RoundedIconHolder = ({ logo, className, tooltip, ...rest }) => {
  return (
    <Tippy content={tooltip}>
      <span className={`roundedIconHolder ${className}`} {...rest}>
        <img src={`/images/icons/${logo}`} alt="skill icon" />
      </span>
    </Tippy>
  );
};

export default RoundedIconHolder;
