import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

// Functional Component Example
// const App = ({ color }: AppProps): JSX.Element => {
//   return <div>{color}</div>;
// };

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  //   state = { counter: 0 }; - this syntax will override default and won't require AppState arg to generic

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color='red' />, document.querySelector("#root"));
