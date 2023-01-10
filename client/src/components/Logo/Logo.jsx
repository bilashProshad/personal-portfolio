import "./Logo.scss";

const Logo = ({ className, href, ...rest }) => {
  return (
    <a href={href} className={`logo link ${className}`} {...rest}>
      B<span>P.</span>
    </a>
  );
};

export default Logo;
