import { useState } from 'react';
import {Button} from '../components/Button'

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>This is counter app.</h1>
      <div id="counter-value">{counter}</div>
      <Button id="increment-btn" onClick={() => setCounter(counter + 1) }>Increment</Button>
      <Button id="decrement-btn" onClick={() => counter > 0 ? setCounter(counter - 1) : null }>Decrement</Button>
    </div>
  );
}


