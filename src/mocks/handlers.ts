// src/mocks/handlers.ts
import {http, HttpResponse} from 'msw'

export const handlers = [
  http.get(`/stations`, async ({request}) => {
    const url = new URL(request.url)

    const latitude = url.searchParams.get('latitude');
    const longitude = url.searchParams.get('longitude');
    const latitudeDelta = url.searchParams.get('latitudeDelta');
    const longitudeDelta = url.searchParams.get('longitudeDelta');

    const northEastBoundary = {
      latitude: Number(latitude) + Number(latitudeDelta),
      longitude: Number(longitude) + Number(longitudeDelta),
    };

    const southWestBoundary = {
      latitude: Number(latitude) - Number(latitudeDelta),
      longitude: Number(longitude) - Number(longitudeDelta),
    };

    console.log(latitude, longitude, latitudeDelta, longitudeDelta, northEastBoundary, southWestBoundary)

    return HttpResponse.json([
      {
        stationId: 'test_station0', stationName: 'test_station0', latitude: 0, longitude: 0
      },
      {
        stationId: 'test_station1', stationName: 'test_station1', latitude: 1, longitude: 1
      },
    ]);
  }),
]
