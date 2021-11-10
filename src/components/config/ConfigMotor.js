import { useDispatch, useSelector } from "react-redux";
import { changeEngine } from "../../stores/config";
import Card from "../ui/Card";

const ConfigMotor = () => {
  const { engine } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  return (
    <Card header="Engine">
      <div className="columns">
        <div className="column">
          <div
            className={`selector__wrapper is-flex is-flex-direction-column is-align-items-center ${
              engine === 1 ? "active" : ""
            }`}
            onClick={() => dispatch(changeEngine(1))}
          >
            <p>240 PS Single Motor</p>
          </div>
        </div>
        <div className="column">
          <div
            className={`selector__wrapper is-flex is-flex-direction-column is-align-items-center ${
              engine === 2 ? "active" : ""
            }`}
            onClick={() => dispatch(changeEngine(2))}
          >
            <p>355 PS Dual Motors</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConfigMotor;
