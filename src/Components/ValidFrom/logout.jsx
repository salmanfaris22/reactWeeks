import React from 'react';

const Logout = ({ log, setLog }) => {
  const modify = () => {
    setLog(false); // Correctly setting the state to false
  };

  return (
    <div>
        <h1>Welcome</h1>
      <button onClick={modify}>LogOut</button>
    </div>
  );
};

export default Logout;
