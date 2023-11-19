import React, { useState } from 'react';
import './App.css';

const App = ({ name, age, team = null }) => {
  const playinfo = {
    name: "Jokic",
    age: 28,
    team: "Nuggets"
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        The player's Name: {name || playinfo.name}, the age is {age || playinfo.age}, currently playing for {team || playinfo.team}.
      </p>
    </>
  );
};

export default App;
