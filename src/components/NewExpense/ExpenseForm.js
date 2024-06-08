import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () =>{

    //using one useState and passing an object in useState
    const [userInput, setUserInput] = useState({
        setEnteredTitle: "",
        setentEnteredAmount: "",
        setEnteredDate: "",
    })


    /*const [EnteredTitle, setEnteredTitle] = useState("");
    const [EnteredAmount, setentEnteredAmount] = useState("");  //creating saprate useState foe each change.
    const [EnteredDate, setEnteredDate] = useState("");*/

    const titleChangeHandler = (event) => {

        /*setUserInput({
            ...userInput,
            setEnteredTitle: event.target.value, // can use this but there is cache as setUserInput is an asyc function it may case problem if the userInput is ipdate before this can updateed
        })*/

        setUserInput((prevState)=>{
                return{
                    ...prevState,
                    setEnteredTitle: event.target.value,
                };
        });

        //setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return{
                ...prevState,
                setentEnteredAmount: event.target.value,
            };
    });

        //setentEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return{
                ...prevState,
                setEnteredDate: event.target.value,
            };
    });
        //setEnteredDate(event.target.value);
    }

    return (<from>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <lable htmlFor="title">Title</lable>
                <input type="text" id ="title" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <lable htmlFor="amount">Amount</lable>
                <input type="number" id ="amount" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <lable htmlFor="date">Date</lable>
                <input type="date" id ="date" min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </from>)
}

export default ExpenseForm;