import ExpensItem from "./ExpenseItems";

const Expenses = (props) => {
  return (
    <div className="card p-3 bg-dark text-light ">
      <ExpensItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpensItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpensItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
    </div>
  );
};

export default Expenses;
