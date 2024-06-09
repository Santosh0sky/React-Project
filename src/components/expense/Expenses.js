import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
        const [filteredYear, setFilteredYear] = useState("2023");
      
        const changeFilterHandler = (selectedYear) => {
          setFilteredYear(selectedYear);
        };


return(
    <Card className = "expenses">
       <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}/>
        { (props.expense).map((expense)=>{
                 if(expense.date.getFullYear()==filteredYear){
                return(
                <ExpenseItem key = {expense.id} 
                date = {expense.date}
                title = {expense.title}
                price = {expense.price}
                />)}
                else{
                    return ("");
                }
            })
        }
    </Card>
)
}

export default Expenses;