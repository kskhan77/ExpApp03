import "bootstrap/dist/css/bootstrap.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./Expenses/NewExpense";
import Card from "./IU/Card";
const App = () => {
  const expenses = [
    { title: "insurance expenses", amount: 45, date: new Date(2022, 4, 24) },
    { title: "Medical expenses", amount: 805, date: new Date(2022, 4, 24) },
    {
      title: "Rental and Utility expenses",
      amount: 45,
      date: new Date(2022, 4, 24)
    }
  ];

  return (
    <div>
      <div className="nav bg-info  m-2 shadow rounded p-2 center h1 navbar">
        <NewExpense />
      </div>
      <Card>
        <Expenses items={expenses} />
      </Card>
    </div>
  );
};

export default App;
