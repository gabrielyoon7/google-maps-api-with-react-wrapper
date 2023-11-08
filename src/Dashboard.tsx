// src/Dashboard.tsx

import {CSSProperties} from "react";
import {useStations} from "./useStations.ts";

const dashboardStyle: CSSProperties = {
  position: 'absolute',
  width: '300px',
  height: '500px',
  backgroundColor: 'white',
  top: '0',
  left: '0',
  zIndex: 100,
};

function Dashboard() {

  const {data: stations, isLoading, isError} = useStations();

  if (isLoading) {
    return <>로딩중...</>;
  }

  if (isError) {
    return <>에러 발생</>;
  }

  if (stations === undefined) {
    return <></>;
  }

  return (
    <div style={dashboardStyle}>
      <div>{stations.length}개</div>
      {stations.map(station => (
        <div key={station.stationId}>
          {station.stationName}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
