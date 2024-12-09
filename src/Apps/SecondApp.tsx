import { useState } from 'react';
import { Zap } from 'lucide-react';

function SecondApp() : JSX.Element {
  const [text, setText] = useState('');

  return (
    <div className="bg-green-50 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-green-600" />
        <h2 className="text-xl font-semibold text-green-800">Second Application</h2>
      </div>
      
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="px-4 py-2 border border-green-300 rounded mb-4 w-full max-w-xs"
        />
        <p className="text-green-700">
          {text ? `You typed: ${text}` : 'Start typing...'}
        </p>
      </div>
    </div>
  );
}

export default SecondApp;