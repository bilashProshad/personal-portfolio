import "./Background.scss";
import { createPortal } from "react-dom";

const Background = () => {
  return createPortal(
    <div className="background">
      <div class="boxs">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>,
    document.getElementById("background")
  );
};

export default Background;
