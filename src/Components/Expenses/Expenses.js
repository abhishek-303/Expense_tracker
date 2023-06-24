import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../ui/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList.js";

import ExpensesChart from "./ExpensesChart.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          defaults={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
           <ExpensesChart expenses ={filteredExpenses}/>
       <ExpensesList  items ={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
