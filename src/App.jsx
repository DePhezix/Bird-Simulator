import styled from 'styled-components'
import MapPage from './components/Map';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import { useSelector } from "react-redux";

function App() {
  const count = Number(useSelector((state) => state.counter.value));

  return (
    <AppDiv>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={count !== 0 ? <MapPage neededLoaded={3} /> : <Navigate to="/" replace />} path='/world'  />
        <Route element={<Navigate to='/' replace />} path="*" />
      </Routes>
    </AppDiv>
  );
}

export default App

const AppDiv = styled.div `
  
`