import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";

function CounterContainer({ number, increaseAsync, decreaseAsync }) {
  const onIncrease = useCallback(() => increaseAsync(), [increaseAsync]);
  const onDecrease = useCallback(() => decreaseAsync(), [decreaseAsync]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default connect((state) => ({ number: state.counter }), {
  increaseAsync,
  decreaseAsync,
})(React.memo(CounterContainer));
