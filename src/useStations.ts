// src/useStations.ts
import {useQuery} from "@tanstack/react-query";
import {getGoogleMapStore} from "./googleMapStore.ts";
import {getDisplayPosition} from "./getDisplayPosition.ts";
import {Station} from "./types.ts";

export const fetchStations = async () => {
  const googleMap = getGoogleMapStore().getState();
  const {latitudeDelta, longitudeDelta, longitude, latitude} = getDisplayPosition(googleMap);

  const stations = await fetch(`/stations?latitude=${latitude}&longitude=${longitude}&latitudeDelta=${latitudeDelta}&longitudeDelta=${longitudeDelta}`).then<Station[]>(async (response) => {
    const data = await response.json();
    return data;
  });

  return stations;
}

export const useStations = () => {
  return useQuery({
    queryKey: ['stations'],
    queryFn: fetchStations,
    refetchOnWindowFocus: false,
  });
};
