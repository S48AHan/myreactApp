import React from "react";

//import ReactBootstarp from "./components/ReactBootstrap/ReactBootstarp";
// import Card1 from "./components/Card1";
// import Card2 from "./components/Card2";
// import Card3 from "./components/Card3";
// import Icons from "./components/Icons";
// function App() {
//   return (
//     // <div>
//     //   <Card1 name="Card1" desc="This is Card1" />
//     //   <Card2 name="Card2" desc="This is Card2" />
//     //   <Card3 />
//     // </div>

//     ///ICONS
//     // <div>
//     //   <h1>Welcome to React </h1>
//     //   <Icons />
//     // </div>

//     ///
//     // <div>
//     //   <ReactBootstarp />
//     // </div>
//     <div>
//       Hello
//     </div>
//   );
// }

// export default App;

/// State
// import STATE from "./components/STATE";
// export default function App() {
//   return (
//     <div>
//       <STATE />
//     </div>
//   );
// }

//Event handler
// import EVENT_HANDLER from "./components/EVENT_HANDLER/index";
// export default function App() {
//   return (
//     <div>
//       <EVENT_HANDLER />
//     </div>
//   );
// }

///Event Binding
// import EventBinding from "./components/EVENT_BINDING/index";

// export default function App() {
//   return (
//     <div>
//       <EventBinding />
//     </div>
//   );
// }

///Hooks
// import Hooks from "./Hooks";
// import HooksRFC from "./components/Hooks/index2";
// export default function App() {
//   return (
//     <div>
//       <HooksRFC />
//     </div>
//   );
// }

///Hooks
// import { useState } from "react";

// export default function App() {
//   const [count, setcount] = useState(0);

//   const Parent = (event) => {
//     console.log("Parent: ", event);
//   };

//   const Increment = (event) => {
//     setcount((count) => count + 1);
//     setcount((count) => count + 1);
//     setcount((count) => count + 1);
//     event.stopPropagation();
//     console.log("increment evnt: ", event);
//   };

//   const Decrement = (event) => {
//     setcount((count) => count - 3);
//     event.stopPropagation();
//     console.log("decement event: ", event);
//   };
//   return (
//     <div className="my_div" onClick={Parent}>
//       <h1>Count:{count}</h1>
//       <button onClick={Increment} disabled={count >= 5 ? true : false}>
//         +
//       </button>
//       <button onClick={Decrement} disabled={count <= 0 ? true : false}>
//         -
//       </button>
//       {/* {console.log(count)} */}
//     </div>
//   );
// }

///FORM

// import FORM from "./components/FROM/FORM";

// export default function App() {
//   return (
//     <div>
//       <FORM />
//     </div>
//   );
// }

///Passing Data form CHILD to PARENT

// import Child from "./components/StateLifting/Child.js";
// import { useState } from "react";

// const data = "I am from Parent(App)";

// export default function App() {
//   const [childData, setchildData] = useState("");

//   const getChildData = (e) => {
//     // console.log(e);
//     setchildData(e);
//   };
//   return (
//     <div>
//       <Child data={data} onChildData={getChildData} />
//       <p>Count In Parent: {childData}</p>
//     </div>
//   );
// }

///Excercise
// import Todo from "./components/Todo";
// import NewTodo from "./components/NewTodo";
// export default function App() {
//   const handleNewTodo = (e) => {
//     console.log(e);
//   };

//   return (
//     <div>
//       <NewTodo onNewTodo={handleNewTodo} />
//       <Todo title="learn ReactJS" />
//     </div>
//   );
// }

///Toggle
// import Toggle from "./components/Toggle/Toggle";
// export default function App() {
//   return (
//     <div>
//       <Toggle />
//     </div>
//   );
// }

///Use Effect Hooks
// import UserEffectExample from "./components/Hooks/useEffect/UserEffectExample";

// export default function App() {
//   return (
//     <div>
//       <UserEffectExample />
//     </div>
//   );
// }

///DataFetching using Use Effect

// import DataFetch from "./components/Hooks/CustomHooks/DataFetch";

// export default function App() {
//   return (
//     <div>
//       <DataFetch />
//     </div>
//   );
// }

/// Display Notification using react-toastify
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function App() {
//   // const notify = () => toast("Hi Dude!");
//   const handleToast = () => {
//     toast("Hi Dude!");
//   };
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>New Todo App</h1>
//       <div style={{ textAlign: "center" }}>
//         <button onClick={handleToast}>Add new todo</button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }
