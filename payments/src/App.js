import React, { useState } from 'react';
import Main from './Main';
import Frontpage from './Frontpage';

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleRegisterClick = () => {
    setShowMain(true);
  }

  return (
    <div className="App">
      {showMain ? <Main /> : <Frontpage />}
      {!showMain && <button className='register' onClick={handleRegisterClick}>REGISTER</button>}
    </div>
  );
}

export default App;
