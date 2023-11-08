// src/App.tsx

import {Status, Wrapper} from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap.tsx";
import Dashboard from "./Dashboard.tsx";

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return (
        <>
          <GoogleMap/>
          <Dashboard/>
        </>
      );
  }
};

function App() {

  return (
    <Wrapper apiKey="" render={render} libraries={['marker']}/>
  )
}

export default App
