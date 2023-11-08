// src/googleMapStore.ts

import {store} from "external-state";

export const INITIAL_CENTER = {
  lat: 37.5,
  lng: 127.0,
}
export const INITIAL_ZOOM_LEVEL = 16;

export const getGoogleMapStore = (() => {
  let googleMap: google.maps.Map;

  const container = document.createElement('div');

  container.id = 'map';
  container.style.minHeight = '100vh';

  document.body.appendChild(container);

  return () => {
    if (!googleMap) {

      googleMap = new window.google.maps.Map(container, {
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM_LEVEL,
        disableDefaultUI: true,
        mapId: '92cb7201b7d43b21',
      });
    }

    return store<google.maps.Map>(googleMap);
  };
})();
