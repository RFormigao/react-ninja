"use strict";

import React, { PureComponent } from "react";
import Counter from "./counter";

class CounterCointeinar extends PureComponent {
  constructor() {
    super();

    this.increment = () => {
      this.props.store.dispatch({ type: "INCREMENT" });
    };
    this.decrement = () => {
      this.props.store.dispatch({ type: "DECREMENT" });
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Counter
        counter={this.props.store.getState()}
        decrement={this.decrement}
        increment={this.increment}
      />
    );
  }
}

export default CounterCointeinar;
