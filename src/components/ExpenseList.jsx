function ExpenseList({ expenses, deleteExpense, setEditExpense }) {
  return (
    <div>
      {expenses.map((expense) => (
        <div className="expense-item" key={expense.id}>
          <h3>{expense.title}</h3>
          <p>Amount: ₹{expense.amount}</p>
          <p>Category: {expense.category}</p>
          <p>Date: {expense.date}</p>

          <button
            className="add-btn"
            onClick={() => setEditExpense(expense)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;