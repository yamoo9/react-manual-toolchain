import { useState } from 'react';

const App = ({ message: initialMessage }) => {
  const [message] = useState(initialMessage ?? 'Hello React 😃');

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
};

export default App;
