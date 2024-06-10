import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
        const [filteredYear, setFilteredYear] = useState("2023");
      
        const changeFilterHandler = (selectedYear) => {
          setFilteredYear(selectedYear);
        };

        const filteredExpenses = props.expense.filter((expense)=>{
                return expense.date.getFullYear().toString() === filteredYear;
        });

        let expensesContent = <p>No expenses found</p>;

        if (filteredExpenses.length > 0) {
          expensesContent = filteredExpenses.map((expense) => {
            return (
                <>
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                price={expense.price}
              />
              {filteredExpenses.length === 1 && <p>Only one expense found. Please add more</p>}
              </>
            );
          });
        }

return(
    <Card className = "expenses">
       <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}/>
        <ExpensesChart chartData = {filteredExpenses} />
        {expensesContent}
    </Card>
)
}

export default Expenses;