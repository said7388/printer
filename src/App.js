import { useState } from 'react';
import './App.css';
import InputContainer from './InputContainer';

function App() {
  const [file, setFile] = useState();

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="App">
      <InputContainer
        handleChangeFile={handleChangeFile}
        file={file}
      />
    </div>
  );
}

export default App;