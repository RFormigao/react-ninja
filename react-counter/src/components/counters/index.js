"use strict";

import React from "react";
import { connect } from "react-redux";
import Counter from "components/counter";
import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from "reducers/counters";

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
  addCounter: () => dispath({ type: ADD_COUNTER }),
  removeCounter: index => () => dispath({ type: REMOVE_COUNTER, index }),
  increment: index => () => dispath({ type: INCREMENT, index }),
  decrement: index => () => dispath({ type: DECREMENT, index })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counters);
