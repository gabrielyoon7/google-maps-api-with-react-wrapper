// src/MarkerContainer.tsx
import {useStations} from "./useStations.ts";
import StationMarker from "./StationMarker.tsx";

function MarkerContainer() {
  const {data: stations} = useStations();

  if (stations === undefined) {
    return <></>;
  }

  return stations.map(station => (
    <StationMarker key={station.stationId} station={station}/>
  ));
}

export default MarkerContainer
