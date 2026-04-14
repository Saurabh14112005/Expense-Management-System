function Summary({ expenses }) {
  const totalAmount = expenses.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <div style={{
      border: "2px solid black",
      padding: "15px",
      margin: "20px 0"
    }}>
      <h2>Summary</h2>
      <p>Total Expenses: {expenses.length}</p>
      <p>Total Amount: ₹{totalAmount}</p>
    </div>
  );
}

export default Summary;
