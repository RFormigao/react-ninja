"use strict";

import React, { PureComponent } from "react";
import Counter from "./counter";
import { connect } from "react-redux";

class CounterCointeinar extends PureComponent {
  constructor() {
    super();

    this.increment = () => {
      this.props.dispatch({ type: "INCREMENT" });
    };
    this.decrement = () => {
      this.props.dispatch({ type: "DECREMENT" });
    };
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        decrement={this.decrement}
        increment={this.increment}
      />
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

export default connect(mapStateToProps)(CounterCointeinar);
