// src/mocks/handlers.ts
import {http, HttpResponse} from 'msw'
import {mockStations} from "./data.ts";
import {Station} from "../types.ts";

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

    console.log(latitude, longitude, latitudeDelta, longitudeDelta, northEastBoundary, southWestBoundary);

    const isStationLatitudeWithinBounds = (station: Station) => {
      return (
        station.latitude > southWestBoundary.latitude &&
        station.latitude < northEastBoundary.latitude
      );
    };

    const isStationLongitudeWithinBounds = (station: Station) => {
      return (
        station.longitude > southWestBoundary.longitude &&
        station.longitude < northEastBoundary.longitude
      );
    };

    const foundStations = mockStations.filter(
      (station) =>
        isStationLatitudeWithinBounds(station) && isStationLongitudeWithinBounds(station)
    )
    
    return HttpResponse.json(foundStations);
  }),
]
