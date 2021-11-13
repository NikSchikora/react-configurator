import ConfigColor from "./ConfigColor";
import ConfigMotor from "./ConfigMotor";
import ConfigPrice from "./ConfigPrice";
import ImageContainer from "./ImageContainer";

const ConfigPanel = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="columns is-vcentered">
        <div className="column">
          <ImageContainer />
        </div>
        <div className="column">
          <ConfigMotor />
          <ConfigColor />
          <ConfigPrice />
        </div>
      </div>
    </div>
  );
};
export default ConfigPanel;
