import "./dashboard.home.css";
import MiddleDevice from "./devicedash/midde.device";
import RightDevice from "./devicedash/right.device";
function DeviceDash() {
  return (
    <div className="d-flex dash--home">
      <MiddleDevice />
      <RightDevice />
    </div>
  );
}

export default DeviceDash;
