// src/GoogleMap.tsx

import {useExternalValue} from "external-state";
import {getGoogleMapStore} from "./googleMapStore.ts";

function GoogleMap() {

  const googleMap = useExternalValue(getGoogleMapStore());

  return <></>
}

export default GoogleMap;
