import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Card from "../ui/Card";

const ConfigPrice = () => {
  const config = useSelector((state) => state.config);
  const [price, setPrice] = useState(40000);

  const getEngine = (eng) => {
    let name;
    switch (eng) {
      case 1:
        name = "240 PS Single Motor";
        break;
      case 2:
        name = "355 PS Dual Motors";
        break;
      default:
        break;
    }
    return name;
  };

  const getColor = (color) => {
    let cl;
    switch (color) {
      case 1:
        cl = "Gray";
        break;
      case 2:
        cl = "Red";
        break;
      case 3:
        cl = "White";
        break;

      default:
        cl = "grey";
        break;
    }
    return cl;
  };

  useEffect(() => {
    let basePrice = 40000;
    if (config.color !== 1) basePrice += 1200;
    if (config.engine !== 1) basePrice += 4500;
    setPrice(basePrice);
  }, [config]);

  return (
    <Card header="Summary">
      <div class="columns">
        <div class="column pl-6 is-size-5">
          <p>
            <b>Engine</b>
          </p>
          <br />
          <p>
            <b>Color</b>
          </p>
        </div>
        <div class="column is-size-5">
          <p>{getEngine(config.engine)}</p>
          <br />
          <p>{getColor(config.color)}</p>
        </div>
      </div>
      <hr />
      <div class="columns">
        <div class="column pl-6 is-size-5">
          <p>
            <b>Your Price</b>
          </p>
        </div>
        <div class="column is-size-5">
          <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " $"}</p>
        </div>
      </div>
    </Card>
  );
};

export default ConfigPrice;
