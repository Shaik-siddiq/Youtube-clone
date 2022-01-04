import {Container} from 'react-bootstrap'
import './App.scss';
import React,{useState} from 'react'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homescreen/HomeScreen';

function App() {
  const [toggle, toggleSidebar] = useState(false)
  const HandleToggleBar = ()=>toggleSidebar(value =>!value)
  return (
    <>
    <Header HandleToggleBar={HandleToggleBar}/> 
    <div className="app_container border border-info">
    <Sidebar toggle={toggle} HandleToggleBar={HandleToggleBar} />
      <Container fluid className="app_main border border-warning">
         <HomeScreen />
       
      </Container>
      </div>
    YouTube Clone
    </>
  );
}

export default App;
