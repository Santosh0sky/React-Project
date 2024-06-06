import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
return(
    <div className = "expenses">
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
    </div>
)
}

export default Expenses;