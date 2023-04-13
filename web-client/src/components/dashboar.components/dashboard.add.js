import MiddleAdd from "./adduserdash/midde.add";
import RightAdd from "./adduserdash/right.add";
import "./dashboard.home.css";
function AddDash() {
  return (
    <div className="d-flex dash--home">
      <MiddleAdd />
      <RightAdd />
    </div>
  );
}

export default AddDash;
