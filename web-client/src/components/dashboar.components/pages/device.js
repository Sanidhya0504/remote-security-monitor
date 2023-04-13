import DeviceDash from "../dashboard.device";
import Pannel from "../left.pannel";

function Devices() {
  return (
    <div className="d-flex">
      <Pannel />
      <DeviceDash />
    </div>
  );
}

export default Devices;
