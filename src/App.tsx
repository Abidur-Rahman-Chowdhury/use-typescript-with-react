import React from 'react';
import logo from './logo.svg';
import './App.css';


let student: string = 'Jeff';
let age: number = 30;
let isSmart: boolean = false;
let students: string[] = ['Jeff', 'Sara', 'Bob'];
let fees: number[] = [100, 200, 300];

interface Person  {
  name: string,
  job?: string, // optional property .. When we want to set it as optional use the ( ? ) for it
  employed: string | boolean ,
  age: number,
  location?: string | number  // or number types
}

const person: Person = {
  name: 'Bill Clinton',
  job: 'President',
  age: 30,
}
const handelAddUser = (firstName: string,age: number, address: string): void => { // void means no return value
  const total: number = 50;
  console.log(firstName, age, address);
  

}

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
