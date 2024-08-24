import { useState } from 'react';
import MineriaTextos from './Chat/Pages/MineriaTextos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
      <MineriaTextos />
    </div>
  );
}

export default App;
