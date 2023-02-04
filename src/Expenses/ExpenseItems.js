import React, { useState } from "react";
import ExpenseDate from "./ExpenseDates";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(React.createElement("input", {}));
    console.log("expense item evlauted ");
  };

  // console.log(`${ExpenseDate}`);
  //  output
  return (
    <div className="card  d-flex flex-row">
      <ExpenseDate date={props.date} />
      <div className="bg-primary text-uppercase  rounded m-1 w-50 border border-danger  ">
        {title}
      </div>
      <div className="bg-primary rounded m-1 w-25 h5 align-middle">
        {props.amount}
      </div>
      <div>
        {" "}
        <button onClick={clickHandler}>change Title</button>
      </div>
    </div>
  );
};

export default ExpenseItems;
