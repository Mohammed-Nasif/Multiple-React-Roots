import { useState } from 'react';
import { Timer } from 'lucide-react';

function FirstApp(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Timer className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-blue-800">First Application</h2>
      </div>
      
      <div className="flex flex-col items-center">
        <p className="text-blue-700 mb-4">Count: {count}</p>
        <button
          onClick={() => setCount(c => c + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default FirstApp;