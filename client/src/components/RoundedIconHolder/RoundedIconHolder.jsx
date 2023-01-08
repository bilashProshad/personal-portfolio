import "./RoundedIconHolder.scss";

const RoundedIconHolder = ({ logo, className, tooltip, ...rest }) => {
  return (
    <span className={`roundedIconHolder ${className}`} {...rest}>
      <img src={`/images/icons/${logo}`} alt="skill icon" />
    </span>
  );
};

export default RoundedIconHolder;
