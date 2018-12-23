"use strict";

import React from "react";
import { connect } from "react-redux";
import Counter from "components/counter";

const Counters = ({ counter, decrement, increment }) => (
  <div>
    {[0, 0, 0].map((item, index) => (
      <Counter
        key={index}
        counter={counter}
        decrement={decrement}
        increment={increment}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch({ type: "DECREMENT" }),
  increment: () => dispatch({ type: "INCREMENT" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters);
