const Card = (props) => {
  return (
    <div className="card mt-5">
      <div className="card-content">
        <p className="title is-4">{props.header}</p>
      </div>
      <div className="card-content">{props.children}</div>
    </div>
  );
};

export default Card;
