import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) =>{

    //using one useState and passing an object in useState
    /*const [userInput, setUserInput] = useState({
        setEnteredTitle: "",
        setentEnteredAmount: "",
        setEnteredDate: "",
    })*/


    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setentEnteredAmount] = useState("");  //creating saprate useState foe each change.
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {

        /*setUserInput({
            ...userInput,
            setEnteredTitle: event.target.value, // can use this but there is cache as setUserInput is an asyc function it may case problem if the userInput is ipdate before this can updateed
        })*/

        /*setUserInput((prevState)=>{
                return{
                    ...prevState,
                    setEnteredTitle: event.target.value,
                };
        });*/

        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        /*setUserInput((prevState)=>{
            return{
                ...prevState,
                setentEnteredAmount: event.target.value,
            };
    });*/

        setentEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        /*setUserInput((prevState)=>{
            return{
                ...prevState,
                setEnteredDate: event.target.value,
            };
    });*/
        setEnteredDate(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const exxpenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(exxpenseData);
        setEnteredDate("");
        setEnteredTitle("");
        setentEnteredAmount("");
    }

    return (<form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" value={enteredTitle} id ="title" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" value={enteredAmount} id ="amount" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" value={enteredDate} id ="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;