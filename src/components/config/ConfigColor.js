import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../stores/config";
import Card from "../ui/Card";

const ConfigColor = () => {
  const { color } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  return (
    <Card header="Color">
      <div className="columns">
        <div className="column">
          <div
            className={`selector__wrapper is-flex is-flex-direction-column is-align-items-center ${
              color === 1 ? "active" : ""
            }`}
            onClick={() => dispatch(changeColor(1))}
          >
            <div id="color__grey" className="selector__color" />
            <p>Gray</p>
          </div>
        </div>
        <div className="column">
          <div
            className={`selector__wrapper is-flex is-flex-direction-column is-align-items-center ${
              color === 2 ? "active" : ""
            }`}
            onClick={() => dispatch(changeColor(2))}
          >
            <div id="color__red" className="selector__color" />
            <p>Red</p>
          </div>
        </div>
        <div className="column">
          <div
            className={`selector__wrapper is-flex is-flex-direction-column is-align-items-center ${
              color === 3 ? "active" : ""
            }`}
            onClick={() => dispatch(changeColor(3))}
          >
            <div id="color__white" className="selector__color" />
            <p>White</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConfigColor;
