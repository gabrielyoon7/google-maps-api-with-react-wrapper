// src/StationMarker.tsx

import {Station} from "./types.ts";
import {useEffect} from "react";
import {useExternalValue} from "external-state";
import {getGoogleMapStore} from "./googleMapStore.ts";
import {createRoot} from "react-dom/client";

function StationMarker({station}: { station: Station }) {
  const googleMap = useExternalValue(getGoogleMapStore());

  useEffect(() => {
    const {latitude, longitude, stationName} = station;

    const container = document.createElement('div');

    const markerInstance = new google.maps.marker.AdvancedMarkerElement({
      position: {lat: latitude, lng: longitude},
      map: googleMap,
      title: stationName,
      content: container,
    });

    createRoot(container).render(
      <div
        style={{backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%'}}
      />
    );

    markerInstance.addListener('click', () => {
      googleMap.panTo({lat: latitude, lng: longitude});
    });

    return () => {
      markerInstance.map = null;
    };
  }, []);

  return <></>
}

export default StationMarker;
