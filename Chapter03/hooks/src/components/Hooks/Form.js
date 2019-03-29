  import React, { useState } from 'react';

  function Form() {
    const [data, setData] = useState({
      name: '',
      age: 0
    });

    return (
      <div className="Form">
        <p>
          <input
            name="name"
            type="text"
            onChange={(e) => setData({
              name: e.target.value,
              age: data.age
            })}
          />
        </p>

        <p>
          <input
            name="age"
            type="number"
            onChange={(e) => setData({
              age: e.target.value,
              name: data.name
            })}
          />
        </p>

        <p>
          Name: {data.name} <br />
          Age: {data.age}
        </p>
      </div>
    );
  }

  export default Form;
