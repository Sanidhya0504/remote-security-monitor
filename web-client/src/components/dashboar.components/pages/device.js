import DeviceDash from "../dashboard.device";
import Pannel from "../left.pannel";

function Devices() {
  var props = window.localStorage.getItem("token");
  console.log(window.localStorage.getItem("token"));
  return (
    <div className="d-flex">
      <Pannel />
      <DeviceDash props={props} />
    </div>
  );
}

export default Devices;
