"use strict";

import React, { PureComponent } from "react";
import Counter from "./counter";

class CounterCointeinar extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    };

    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }

  render() {
    const { counter } = this.state;

    return (
      <Counter
        counter={counter}
        decrement={this.decrement}
        increment={this.increment}
      />
    );
  }
}

export default CounterCointeinar;
