
//Contact.js

import App from "./App";

// import React from "react"

// export default function Contact(props) {
//     /**
//      * Challenge: Fix the code below to use the `props`
//      * object values in place of the hardcoded values below
//      */
//     return (
//         <div className="contact-card">
//             <img src={props.img}/>
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{props.phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }


//Object Destructuring

// export default function Contact({img, name, phone, email}) {
//     return (
//         <div className="contact-card">
//             <img src={img}/>
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }


// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(name) -> returns Mr.Whiskerson




// App.js

// import React from "react"
// import Contact from "./Contact"

// function App() {
//     return (
//         <div className="contacts">
//             <Contact 
//                 img="./images/mr-whiskerson.png" 
//                 name="Mr. Whiskerson"
//                 phone="(212) 555-1234"
//                 email="mr.whiskaz@catnap.meow"
//             />
//             <Contact 
//                 img="./images/fluffykins.png"
//                 name="Fluffykins"
//                 phone="(212) 555-2345"
//                 email="fluff@me.com"
//             />
//             <Contact 
//                 img="./images/felix.png"
//                 name="Felix"
//                 phone="(212) 555-4567"
//                 email="thecat@hotmail.com"
//             />
//             <Contact 
//                 img="./images/pumpkin.png"
//                 name="Pumpkin"
//                 phone="(0800) CAT KING"
//                 email="pumpkin@scrimba.com"
//             />
//         </div>
//     )
// }

// export default App



// 1. What do props help us accomplish?
// Make a component more reusable.


// 2. How do you pass a prop into a component?
// <MyAwesomeHeader title="???" />


// 3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
//    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
// No, because the JSX we use to describe native DOM elements will
// be turned into REAL DOM elements by React. And real DOM elements
// only have the properties/attributes specified in the HTML specification.
// (Which doesn't include properties like `blahblahblah`)


// 4. How do I receive props in a component?
// function Navbar(props) {
//     console.log(props.blahblahblah)
//     return (
//         <header>
//             ...
//         </header>
//     )
// }


// 5. What data type i


// ///*
// Challenge 1:
// Given an array of numbers, return an array of each number, squared
// */
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const squares = nums.map(function(num) {
//     return num * num
// })

// // console.log(squares)



// /*
// Challenge 2:
// Given an array of strings, return an array where 
// the first letter of each string is capitalized
// */

// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const capitalized = names.map(name => (
//     name[0].toUpperCase() + name.slice(1))
// )
// // console.log(capitalized)



// /*
// Challenge 3:
// Given an array of strings, return an array of strings that wraps each
// of the original strings in an HTML-like <p></p> tag.

// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// */

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// // Your code here

// const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

// console.log(paragraphs)


// 18. Mapping Components

// import React from "react"
// import Joke from "./Joke"
// import jokesData from "./jokesData"

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }



// 1. What does the `.map()` array method do?
// Returns a new array. Whatever gets returned from the callback
// function provided is placed at the same index in the new array.
// Usually we take the items from the original array and modify them
// in some way.


// 2. What do we usually use `.map()` for in React?
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page.


// 3. Why is using `.map()` better than just creating the components
//    manually by typing them out?
// It makes our code more "self-sustaining" - not requiring
// additional changes whenever the data changes.