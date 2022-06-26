import styled from "styled-components";
import { useMemo } from 'react'
import { useSelector } from "react-redux";

function MapPage() {
  let Loaded = 0;
  let WhileLoopDone = false;

  const LoadedLocations = [];
  const count = Number(useSelector((state) => state.counter.value));

  const Locations = [
    "l1",
    "l2",
    "l3",
    "l4",
    "l5",
    "l6",
    "l7",
    "l8",
    "l9",
    "l10", 
    "l11",
    "l12",
    "l13",
    "l14",
    "l15",
    "l16",
    "l17",
    "l18",
    "l19",
    "l20",
  ];

  useMemo(() => {
    while (Loaded !== count) {
      if (Loaded === count) {
        return;
      }

      const LoadedLocation =
        Locations[Math.floor(Math.random() * Locations.length)];
      const LoadedLocationIndex = Locations.indexOf(LoadedLocation);

      Locations.splice(LoadedLocationIndex, 1);
      Loaded++;

      LoadedLocations.push(LoadedLocation);

      WhileLoopDone = true;
    }
  });

  return (
    <MapDiv id='parent'>
      <Map src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/New-global-view.max-1100x1100.jpeg"/>
      {WhileLoopDone ? LoadedLocations.map((location) => (
        <LocationMarker
          location={location}
          key={Locations.indexOf(location)}
          turn={LoadedLocations.indexOf(location)}
        >
          <Circle>
            <EarthImage src="https://static.vecteezy.com/system/resources/previews/002/399/737/non_2x/planet-earth-icon-vector.jpg" />
          </Circle>
          <Triangle />
        </LocationMarker>
      )) : ''
    }
    </MapDiv>
  );
}

export default MapPage;

const Map = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const MapDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  overflow: hidden;
`;

const LocationMarker = styled.div`
  width: 35px;
  height: 58px;
  position: absolute;
  top: ${({ location }) =>
    location === "l1"
      ? "55vh"
      : location === "l2" || location === "l4"
      ? "15vh"
      : location === "l3" || location === "l11"
      ? "30vh"
      : location === "l6"
      ? "35vh"
      : location === "l8"
      ? "20vh"
      : location === "l9" || location === "l19"
      ? "25vh"
      : location === "l10"
      ? "1vh"
      : location === "l12"
      ? "50vh"
      : location === "l13"
      ? "12vh"
      : location === "l14" || location === "l15" || location === "l18"
      ? "5vh"
      : location === "l5" ||
        location === "l7" ||
        location === "l16" ||
        location === "l17"
      ? "70vh"
      : location === "l20"
      ? "5vh"
      : null};
  left: ${({ location }) =>
    location === "l1"
      ? "30vw"
      : location === "l4"
      ? "15vw"
      : location === "l5"
      ? "28vw"
      : location === "l6"
      ? "60vw"
      : location === "l7"
      ? "80vw"
      : location === "l8" || location === "l11"
      ? "70vw"
      : location === "l9" || location === "l14"
      ? "20vw"
      : location === "l10"
      ? "33vw"
      : location === "l12"
      ? "77vw"
      : location === "l13"
      ? "45vw"
      : location === "l15"
      ? "90vw"
      : location === "l16"
      ? "52vw"
      : location === "l17"
      ? "85vw"
      : location === "l18"
      ? "54vw"
      : location === "l19"
      ? "58vw"
      : location === "l20"
      ? "65vw"
      : null};

  visibility: hidden;
  animation: Down 1s forwards;
  animation-delay: ${(props) => `${props.turn / 2}s`};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    div {
      transform: translateY(-30px) rotateY(360deg);
    }
  }

  @keyframes Down {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0px);
      visibility: visible;
    }
  }
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  background: blue;
  border-radius: 100%;
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-top: 25px solid blue;
  position: absolute;
  top: 70%;
  transition: transform 0.5s ease-in-out;
`;

const EarthImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
`;
