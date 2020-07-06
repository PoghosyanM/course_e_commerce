import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  // obj = {
  //   count: 1,
  //   b: [2, 3, 4],
  // };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { num } = this.props;
    return (
      <>
        {/* <button onClick={this.increment}>Increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button> */}
        <button>On</button>
      </>
    );
  }
}

// const increment = (event) => {
//   count++
// }

// elem.addeventlistener("click", increment)

export default Counter;
