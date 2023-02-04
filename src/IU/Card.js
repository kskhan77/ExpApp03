const Card = (props) => {
  return (
    <div className=" bg-success m-2 p-2 container-fluid">{props.children}</div>
  );
};

export default Card;
