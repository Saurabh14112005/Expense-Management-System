function Filter({ selectedCategory, setSelectedCategory }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Filter by Category</h3>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
      </select>
    </div>
  );
}

export default Filter;