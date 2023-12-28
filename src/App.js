
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {

  const [searchData,setSearchData]=useState();
  return (
    <div className="App">
      <Navbar searchData={searchData}/>

    </div>
  );
}

export default App;
