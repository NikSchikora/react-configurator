import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ImageContainer = () => {
  const [carColor, setCarColor] = useState();

  const { color } = useSelector((state) => state.config);

  useEffect(() => {
    const getColor = () => {
      let cl;
      switch (color) {
        case 1:
          cl = "grey";
          break;
        case 2:
          cl = "red";
          break;
        case 3:
          cl = "white";
          break;
        default:
          cl = "grey";
      }
      return "/cars/model_s_" + cl + ".png";
    };
    setCarColor(getColor());
  }, [color]);

  return (
    <div className="content">
      <img src={carColor} alt="Model S" />
    </div>
  );
};

export default ImageContainer;
