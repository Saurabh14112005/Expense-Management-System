import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

function ExpenseChart({ expenses }) {
  // Category wise total calculate
  const categoryData = expenses.reduce((acc, curr) => {
    const existing = acc.find(
      (item) => item.name === curr.category
    );

    if (existing) {
      existing.value += Number(curr.amount);
    } else {
      acc.push({
        name: curr.category,
        value: Number(curr.amount),
      });
    }

    return acc;
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Expense Distribution</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;