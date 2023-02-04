const ExpenseForm = () => {
  return (
    <form>
      {/* Title */}
      <div className="new-exp_control">
        <label>Title</label>
        <input type="text" />
      </div>
      {/* amount */}
      <div className="new-exp_control">
        <label>Amount</label>
        <input type="number" min=".01" step="0.01" />
      </div>
      {/* title */}
      <div className="new-exp_control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2025,12,31" />
      </div>
      {/* Button */}

      <div className="new-exp_action">
        <button type="submit">add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
