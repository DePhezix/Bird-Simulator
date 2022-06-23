import styled from 'styled-components'
import MapPage from './components/Map';
import {Routes, Route, useNavigate, Link} from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home';

function App() {
  return (
    <AppDiv>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<MapPage neededLoaded={locations} />} path='/world'  />
      </Routes>
    </AppDiv>
  );
}

export default App

const AppDiv = styled.div `
  
`