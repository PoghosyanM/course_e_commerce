import React from "react";
import Counter from "./components/counter/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter num={1} />
        {/* <Counter num={2} />
        <Counter num={3} />
        <Counter num={4} />
        <Counter num={5} /> */}
      </div>
    );
  }
}

// function App() {
//   console.log(a + b);
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

export default App;
