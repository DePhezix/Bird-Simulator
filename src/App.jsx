import styled from 'styled-components'
import MapPage from './components/Map';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <AppDiv>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<MapPage neededLoaded={3} />} path='/world'  />
      </Routes>
    </AppDiv>
  );
}

export default App

const AppDiv = styled.div `
  
`