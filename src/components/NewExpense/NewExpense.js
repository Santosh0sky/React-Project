import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setisEditing] = useState(false);

    const saveExpenseDataHanlder = (enteredExpenseData) =>{
        const expenseData = {...enteredExpenseData, id: Math.random().toString() };
        props.onExpenseData(expenseData);
        setisEditing(false);
    }


    const buttonClickHandler = () =>{
        setisEditing(true);
    }
    const cancelFormHandler = () => {
        setisEditing(false);
    }

    return(
        <div className="new-expense"> 
        {isEditing === false && <button onClick={buttonClickHandler}>Add Expense</button>}
        {isEditing === true && <ExpenseForm onSaveExpenseData = {saveExpenseDataHanlder} onCancel = {cancelFormHandler}/>}
        </div>
    )

}

export default NewExpense;