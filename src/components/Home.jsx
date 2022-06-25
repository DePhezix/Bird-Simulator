import styled from 'styled-components'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { editAmount } from '../redux/counterSlice'
import {useNavigate} from 'react-router-dom'

function Home() {
  const [locations, setLocations] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (number) => {
    if (number >= 7) {
        return
    } else {
        return setLocations(number);
    }
  }
  const handleSubmit = async () => {
    dispatch(editAmount(locations))
    navigate('/world')
  }
  return (
    <HomeDiv>
      <InputDiv>
        <LocationIconDiv>
          <img src="https://cdn-icons-png.flaticon.com/512/4781/4781446.png" />
        </LocationIconDiv>
        <LocationInputDiv>
          <LocationInput
            onChange={(e) => handleChange(e.target.value)}
            type="number"
            value={locations}
          />
          <p>Locations</p>
        </LocationInputDiv>
      </InputDiv>
      <Submit onClick={() => handleSubmit()}>Submit</Submit>
    </HomeDiv>
  );
}

export default Home

const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: RGB(44, 55, 109);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

const LocationInput = styled.input`
  width: 280px;
  height: 30px;
  border: none;
  background: transparent;
  font-size: 15px;
  transform: translateX(10px);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus-visible {
    outline: none;
  }
`;

const LocationInputDiv = styled.div`
  width: 300px;
  height: 30px;
  border-radius: 30px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &>p {
      transform: translateX(-30px);
      font-size: 18px;
      font-weight: 600;
  }
`;

const LocationIconDiv = styled.div `
    background: #05ff05;
    width: 70px;
    height: 30px;
    z-index: 1;
    border-radius: 30px;
    transform: translateX(30px);
    display: flex;
    align-items: center;
    justify-content: center;

    &>img {
        width: 30px;
        transform: translateX(-10px);
    }
`

const Submit = styled.button `
    background: green;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(20px, 30px);
    border-radius: 30px;
    color: white;
    cursor: pointer;
`

const InputDiv = styled.div `
    display: flex;
`