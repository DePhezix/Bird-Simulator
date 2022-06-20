import styled from 'styled-components'

function MapPage() {
  return (
    <MapDiv>
      <Map src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/New-global-view.max-1100x1100.jpeg" />
      <Group>
        <LocationMarker location="Australia">
          <Circle>
            <EarthImage src="https://static.vecteezy.com/system/resources/previews/002/399/737/non_2x/planet-earth-icon-vector.jpg" />
          </Circle>
          <Triangle />
        </LocationMarker>
        <LocationMarker location="Asia">
          <Circle>
            <EarthImage src="https://static.vecteezy.com/system/resources/previews/002/399/737/non_2x/planet-earth-icon-vector.jpg" />
          </Circle>
          <Triangle />
        </LocationMarker>
      </Group>
      <Group>
        <LocationMarker location="Europe">
          <Circle>
            <EarthImage src="https://static.vecteezy.com/system/resources/previews/002/399/737/non_2x/planet-earth-icon-vector.jpg" />
          </Circle>
          <Triangle />
        </LocationMarker>
        <LocationMarker location="Africa">
          <Circle>
            <EarthImage src="https://static.vecteezy.com/system/resources/previews/002/399/737/non_2x/planet-earth-icon-vector.jpg" />
          </Circle>
          <Triangle />
        </LocationMarker>
      </Group>
      <Group>
        <LocationMarker location="North America">
          <Circle>
            <EarthImage src="https://static.vecteezy.com/system/resources/previews/002/399/737/non_2x/planet-earth-icon-vector.jpg" />
          </Circle>
          <Triangle />
        </LocationMarker>
        <LocationMarker location="South America">
          <Circle>
            <EarthImage src="https://static.vecteezy.com/system/resources/previews/002/399/737/non_2x/planet-earth-icon-vector.jpg" />
          </Circle>
          <Triangle />
        </LocationMarker>
      </Group>
    </MapDiv>
  );
}

export default MapPage

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
  position: relative;
  top: ${(props) =>
    props.location === "Australia"
      ? "65%"
      : props.location === "Europe"
      ? "10%"
      : props.location === "Africa"
      ? "30%"
      : props.location === "North America"
      ? "15%"
      : props.location === "South America"
      ? "40%"
      : null};
  left: ${(props) =>
    props.location === "Australia"
      ? "50%"
      : props.location === "Europe"
      ? "70%"
      : props.location === "Africa"
      ? "55%"
      : props.location === "North America"
      ? "50%"
      : props.location === "South America"
      ? "85%"
      : null};

  visibility: hidden;
  animation: Down 1s forwards;
  /* animation-delay: ${(props) => `${props.turn}s`}; */

  @keyframes Down {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

const Group = styled.div`
  width: 100%;
  height: 100%;
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
  border-right: 12px solid transparent;
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