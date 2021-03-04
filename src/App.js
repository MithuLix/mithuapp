import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["razzak", "jasim", "alomgir", "salman", "Babbi"];
    const friends = ["mithu", "rakib", "sakin", "jalal"];

  const products = [
      {name: "Photoshop", price:"$66.7"},
      {name: "Illustrator", price:"$43.1"},
      {name: "After-effects", price:"$78.7"},
      {name: "Premier-Elements", price:"$348.7"}
  ];
  const employees = [
    {name1:"Razzaq", position:"Manager"},
    {name1: "mostofa", position:"HR" },
    {name1: "Kamal", position:"Country Director"},
  ];
  return (
    <div className="App">
      <header className="App-header">

      {/* my edit */}
      <Counter></Counter>
      <Users></Users>
      <ul>
        {nayoks.map(nayok => <li>{nayok}</li>)}
        {products.map(product => <li>{product.name}</li>)}
        {friends.map(friend => <li>{friend}</li>)}
      </ul>

      { products.map(pd => <Product product={pd}></Product>)}
      { employees.map(em => <Employee employee={em}></Employee>)}

      </header>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(20);
  return(
    <div>
      <h2>Count : {count}</h2>
      <button onMouseMove={() => { setCount(count - 1)}}>Decrease</button>
      <button onClick={() => { setCount(count + 1)}}>Increase</button>
    </div>
  )
}

function Users() {
  const UserStyle = {
    textAlign: "left",
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return(
    <div style={UserStyle}>
      <h3>Dynamic Users: {users.length}</h3>
      {
         <ol>
           {
             users.map(user => <li style={{backgroundColor:"lightgray"}}>{user.name} <p>email: {user.email}</p></li>)
           }
         </ol>
      }

    </div>
  )
}

function Product(props) {
  const ProductStyle={
    border:"1px solid gray",
    borderRadius: "5px",
    backgroundColor:"lightgray",
    height:"auto",
    padding:"1rem",
    width:"200px",
    float:"left",
    margin:"3px",
    lineHeight:"1.5rem",
    textAlign:"left"
  }

  const {name, price} = props.product;
  return (
    <div style={ProductStyle}>
        <h3>{name}</h3>
        <h3>{price}</h3>
        <button>Buy now</button>
    </div>
  )
};


function Employee(props) {
  const EmployeetStyle={
    border:"1px solid gray",
    borderRadius: "5px",
    backgroundColor:"lightgray",
    height:"auto",
    padding:"1rem",
    width:"200px",
    float:"left",
    margin:"3px",
    lineHeight:"1.5rem",
    textAlign:"left"
  }
  const {name1, position} = props.employee;
  return (
    <div style={EmployeetStyle}>
        <h3>{name1}</h3>
        <h3>{position}</h3>
        <button>Get Details</button>
    </div>
  )
}


export default App;
