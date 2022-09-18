import { useState } from 'react';
import './App.css';
import AppendItem from './Components/Mapping';
import InputBox from './Components/Inputs';

function App() {

  const[data,setData] = useState(JSON.parse(localStorage.getItem('data'))||[]);

  return (
    <div className="App">
      <div className="rgac">
        <InputBox setData = {setData} data ={data} />
        <AppendItem data={data}/>
      </div>
    </div>
  );

}

export default App;
