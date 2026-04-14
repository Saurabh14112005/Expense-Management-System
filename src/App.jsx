import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import Filter from "./components/Filter";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editExpense, setEditExpense] = useState(null);

  // 🔍 NEW STATES
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addOrUpdateExpense = (expense) => {
    if (editExpense) {
      const updated = expenses.map((item) =>
        item.id === editExpense.id ? expense : item
      );
      setExpenses(updated);
      setEditExpense(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  // ✅ FILTER BY CATEGORY
  let filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (item) => item.category === selectedCategory
        );

  // 🔍 SEARCH BY TITLE
  filteredExpenses = filteredExpenses.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📊 SORTING
  if (sortOption === "amountLowHigh") {
    filteredExpenses.sort((a, b) => a.amount - b.amount);
  }

  if (sortOption === "amountHighLow") {
    filteredExpenses.sort((a, b) => b.amount - a.amount);
  }

  if (sortOption === "dateNewest") {
    filteredExpenses.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  if (sortOption === "dateOldest") {
    filteredExpenses.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }

  return (
    <div className="container">
      <h1>Expense Management System</h1>

      <div className="grid">
        <div className="card full-width">
          <ExpenseForm
            addOrUpdateExpense={addOrUpdateExpense}
            editExpense={editExpense}
          />
        </div>

        <div className="card">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="card">
          <Summary expenses={filteredExpenses} />
        </div>

        <div className="card full-width">
        <ExpenseChart expenses={filteredExpenses} />
        </div>

        {/* 🔍 SEARCH + SORT SECTION */}
        <div className="card full-width">
          <h3>Search & Sort</h3>

          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="none">No Sorting</option>
            <option value="amountLowHigh">
              Amount: Low to High
            </option>
            <option value="amountHighLow">
              Amount: High to Low
            </option>
            <option value="dateNewest">
              Date: Newest First
            </option>
            <option value="dateOldest">
              Date: Oldest First
            </option>
          </select>
        </div>

        <div className="card full-width">
          <ExpenseList
            expenses={filteredExpenses}
            deleteExpense={deleteExpense}
            setEditExpense={setEditExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;