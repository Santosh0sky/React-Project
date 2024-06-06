import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props){
return(
    <Card className = "expenses">
        {
            props.expense.map((expense)=>{
                return(
                <ExpenseItem key = {expense.id} 
                date = {expense.date}
                title = {expense.title}
                price = {expense.price}
                />);
            })
        }
    </Card>
)
}

export default Expenses;