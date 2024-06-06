import ExpenseItem from "./components/ExpenseItem"

function App() {
  const expenses = [
    { id: "1", date: new Date(2023, 7, 15), location: "Bangalore", title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), location: "Delhi", title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), location: "Hyderabad", title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), location: "Mumbai", title: "Laptop", price: 200 },
  ];
  return (
    <div>
    <h1>Let's get Started</h1>
    {expenses.map((expenses)=>{
      return(
        <ExpenseItem key={expenses.id}
        date={expenses.date} 
        location={expenses.lcation}
        title={expenses.title}
        price={expenses.price}/>
      )
    })}
  </div>
  );
}

export default App;
