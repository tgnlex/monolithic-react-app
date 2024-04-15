import {useWorker} from 'use-react-workers';
import {useState} from 'react';
import {countByInput} from '../functions/countByInput';
import '../../style/counter.css';
const CounterWorker = () => {
  const [count, setCount] = useState(0);
  const worker = useWorker(countByInput);
  worker.onMessage(({ data }) => setCount(data));

  return (
    <div className="component">
      <div className="btn-controls">
        <button className="btn" onClick={() => worker.postMessage(1)}>Count by 1</button>
        <button className="btn" onClick={() => worker.postMessage(2)}>Count by 2</button>
        <button className="btn" onClick={() => worker.postMessage(5)}>Count by 5</button>
        <button className="btn" onClick={() => worker.postMessage(7)}>Count by 7</button>
        <button className="btn" onClick={() => worker.postMessage(10)}>Count by 10</button>
        <button className="btn" onClick={() => worker.postMessage(15)}>Count by 15</button>
        <button className="btn" onClick={() => worker.postMessage(20)}>Count by 20</button>
      </div>
      <output className="results">{count}</output>
    </div>
  )
}

export default CounterWorker;
