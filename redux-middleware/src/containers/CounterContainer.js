import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";

function CounterContainer({ number, increase, decrease }) {
  const onIncrease = useCallback(() => increase(), [increase]);
  const onDecrease = useCallback(() => decrease(), [decrease]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default connect((state) => ({ number: state.counter }), {
  increase,
  decrease,
})(React.memo(CounterContainer));
