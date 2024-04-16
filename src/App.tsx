import Navbar from './components/navbar.tsx';
import CounterWorker from './components/workers/counter.tsx';

import './style/globals.css';
function App() {
  return (
    <>
    <Navbar />
    <main id="main" className="">
      <h1>
         Home
      </h1>
      <div className='controls'>
        <CounterWorker />
      </div>
    </main>
  </>
  )
}

export default App