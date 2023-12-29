
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {

  const [searchData,setSearchData]=useState();
  return (
    <div className="App">
      <Navbar searchData={searchData}/>
      <Hero/>

    </div>
  );
}

export default App;
