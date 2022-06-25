import styled from "styled-components";
import { useMemo } from 'react'
import { useSelector } from "react-redux";

function MapPage() {
  let Loaded = 0;
  const LoadedLocations = [];
  let WhileLoopDone = false;
  const count = Number(useSelector((state) => state.counter.value));

  const Locations = [
    "Australia",
    "Asia",
    "Europe",
    "Africa",
    "North America",
    "South America",
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
    <MapDiv>
      <Map src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/New-global-view.max-1100x1100.jpeg" />
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
  width: 100vw;
  height: 100vh;
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
  width: 100px;
  height: 100px;
  position: absolute;
  top: ${({ location }) =>
    location === "Australia"
      ? "67vh"
      : location === "Europe"
      ? "13vh"
      : location === "Africa"
      ? "40vh"
      : location === "North America"
      ? "15vh"
      : location === "South America"
      ? "55vh"
      : location === "Asia"
      ? "13vh"
      : null};
  left: ${({ location }) =>
    location === "Australia"
      ? "83vw"
      : location === "Europe"
      ? "55vw"
      : location === "Africa"
      ? "50vw"
      : location === "North America"
      ? "16vw"
      : location === "South America"
      ? "28vw"
      : location === "Asia"
      ? "70vw"
      : null};

  visibility: hidden;
  animation: Down 1s forwards;
  animation-delay: ${(props) => `${props.turn/2}s`};

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
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 12.5px solid transparent;
  border-top: 25px solid blue;
  position: absolute;
  left: 4.5%;
  top: 29%;
`;

const EarthImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
`;
