function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h3>{expense.title}</h3>
      <p>Amount: ₹{expense.amount}</p>
      <p>Category: {expense.category}</p>
      <p>Date: {expense.date}</p>

      <button onClick={() => deleteExpense(expense.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;