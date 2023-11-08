// src/types.ts

export interface Station {
  stationId: string;
  stationName: string;
  latitude: number;
  longitude: number;
}

export interface DisplayPosition {
  longitude: number;
  latitude: number;
  longitudeDelta: number;
  latitudeDelta: number;
  zoom: number;
}

