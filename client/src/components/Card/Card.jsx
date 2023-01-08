import "./Card.scss";

const Card = ({
  icon,
  title,
  text,
  className,
  defaultContent = true,
  children,
  ...rest
}) => {
  return defaultContent ? (
    <div className={`defaultCard ${className}`} {...rest}>
      <img src={icon} alt={title} />

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  ) : (
    <div className={`card ${className}`}>{children}</div>
  );
};

export default Card;
