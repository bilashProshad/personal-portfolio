import "./IconLinkRound.scss";

const IconLinkRound = ({ children, href, className, ...rest }) => {
  return (
    <a href={href} className={`icon-link ${className}`} {...rest}>
      {children}
    </a>
  );
};

export default IconLinkRound;
