import HomeDash from "../dashboard.home";
import Pannel from "../left.pannel";

function MainDash() {
  return (
    <div className="d-flex">
      <Pannel />
      <HomeDash />
    </div>
  );
}

export default MainDash;
