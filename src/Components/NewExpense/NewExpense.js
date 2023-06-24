import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

// here enteredExpenseData argument is the object which we receive from expenseform component.
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
