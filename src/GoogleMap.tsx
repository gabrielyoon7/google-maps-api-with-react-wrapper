// src/GoogleMap.tsx

import {useExternalValue} from "external-state";
import {getGoogleMapStore} from "./googleMapStore.ts";
import {useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";

function GoogleMap() {

  const googleMap = useExternalValue(getGoogleMapStore());
  const queryClient = useQueryClient();

  useEffect(() => {
    googleMap.addListener('idle', () => {
      queryClient.invalidateQueries({queryKey: ['stations']});
    });

  }, [googleMap]);

  return <></>
}

export default GoogleMap;
