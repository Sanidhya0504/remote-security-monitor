import AddDash from "../dashboard.add";
import Pannel from "../left.pannel";

function AddDevice() {
  return (
    <div className="d-flex">
      <Pannel />
      <AddDash />
    </div>
  );
}

export default AddDevice;
