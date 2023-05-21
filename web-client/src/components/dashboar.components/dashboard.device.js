import "./dashboard.home.css";
import MiddleDevice from "./devicedash/midde.device";
import RightDevice from "./devicedash/right.device";
function DeviceDash(props) {
  return (
    <div className="d-flex dash--home">
      <MiddleDevice />
      <RightDevice props={props} />
    </div>
  );
}

export default DeviceDash;
