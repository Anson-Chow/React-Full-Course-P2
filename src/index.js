import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function App1() {
//   return (
//     <div>
//       <Navbar />
//       {/* <Main /> */}
//       <Card
//         img="katie-zaferes.png"
//         rating="5.0"
//         reviewcount={6}
//         country="USA"
//         title="Life Lessons with Katie Zaferes"
//         price={136}
//       />
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App1 />);
