import React from 'react';
import logo from './logo.svg';
import './App.css';


// interface Person {
//   name: String;
//   age?: Number; // fungsi "?" untuk biar gak strict
// }

// let People: Person[] = [
//   {
//     name: "Kenzie", 
//     age: 25},
//   {
//     name: "Edernez", 
//     age: 24},
//   {
//     name: " Amanda",
//     age: 23},
//   {
//     name: "Evania", 
//     age: 22},
//   {
//     name: "Yo"
//   }
// ];
// console.log(People)



// function hallo(name: string){
//   console.log(`${name} Hello World`);
// }

// hallo("Kenzie");


// function hallo(people: Person[]){
//   people.forEach(person => {
//     console.log(`Hello ${person.name}`);
//   })

//   people.map(person => {
//     console.log(`Hello ${person.name}`);
//   })
// }

// hallo(People);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
