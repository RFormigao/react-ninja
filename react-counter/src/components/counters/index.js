"use strict";

import React from "react";
import { connect } from "react-redux";
import Counter from "components/counter";
import {
  addCounter,
  removeCounter,
  increment,
  decrement
} from "reducers/counters/action-creators";

const Counters = ({
  counters,
  addCounter,
  removeCounter,
  increment,
  decrement
}) => (
  <div>
    <div>
      {counters.map((counter, index) => (
        <Counter
          {...{
            key: index,
            counter,
            removeCounter: removeCounter(index),
            increment: increment(index),
            decrement: decrement(index)
          }}
        />
      ))}
    </div>
    <div>
      <button onClick={addCounter}>Adicionar Contador</button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  counters: state
});

const mapDispatchToProps = dispath => ({
  addCounter: () => dispath(addCounter()),
  removeCounter: index => () => dispath(removeCounter(index)),
  increment: index => () => dispath(increment(index)),
  decrement: index => () => dispath(decrement(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters);
