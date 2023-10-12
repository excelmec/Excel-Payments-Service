import React, { useState } from 'react';
import Main from './Main';
import Frontpage from './Frontpage';

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleRegisterClick = () => {
    setShowMain(true);
  }

  const navigateToMain = () => {
    setShowMain(true);
  }

  return (
    <div className="App">
      {showMain ? <Main /> : <Frontpage showMain={showMain} handleRegisterClick={handleRegisterClick} />}
    </div>
  );
}

export default App;
