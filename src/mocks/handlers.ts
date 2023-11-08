// src/mocks/handlers.ts
import {http, HttpResponse} from 'msw'
import {mockStations} from "./data.ts";

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


    return HttpResponse.json(mockStations);
  }),
]
