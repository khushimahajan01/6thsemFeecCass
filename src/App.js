// import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {fact} from './redux';
// import { decrement, increment } from './redux';

function App() {
  const catFact = useSelector(state => state.fact)
  const dispatch = useDispatch()
  return (
    <div>
      {/* <h1>Counter app</h1>
      <br/>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button> */}

      {catFact}
      
      <button onClick={()=> dispatch(fact())}>Get Cat Facts</button>
    </div>
    
  );
}

export default App;
