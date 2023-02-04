const ExpenseDates = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="card bg-dark text-light w-25 ">
      <div className="h5 bg-danger rounded m-1 p-2">{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDates;
