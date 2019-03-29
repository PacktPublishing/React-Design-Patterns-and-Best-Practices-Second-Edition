import React, { useState } from 'react';

function Counter() {
  // times is our new state variable and setTimes the function to update that state.
  const [times, setTimes] = useState(0);

  return (
    <div className="Times">
      <p>Times clicked: {times}</p>
      <button onClick={() => setTimes(times + 1)}>Click it!</button>
    </div>
  );
}

export default Counter;
