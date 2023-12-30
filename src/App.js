import { fetchTopAlbums,fetchNewAlbums,fetchSongs} from './Api/Api';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  const [searchData,setSearchData]=useState();
  const[data, setData]=useState({});

  const generateData=(key, source)=>{
    source().then((data)=>{
      setData((prevData)=>{
        return{...prevData, [key]: data}

      })
    })
  };

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    //generateData("songs", fetchSongs)
  },[]);

  const{topAlbums=[], newAlbums=[], songs=[] }= data;

  return (
    <div>
      <Navbar searchData={[...topAlbums, ...newAlbums]}/>
      <Outlet context={{data:{topAlbums, newAlbums,songs}}}/>

    </div>
  );
}

export default App;
