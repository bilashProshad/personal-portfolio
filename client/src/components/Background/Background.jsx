import "./Background.scss";
import { createPortal } from "react-dom";
// import videoBG from "../../assets/bgv3.mp4";

const Background = () => {
  return createPortal(
    <div className="background">
      {/* <video autoPlay loop muted playsInline className="clip">
        <source src={videoBG} type="video/mp4" />
      </video> */}
      {/* <div class="boxs">
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
      </div> */}
    </div>,
    document.getElementById("background")
  );
};

export default Background;
