import * as Location from "expo-location";
import { useState, useEffect } from "react";

type Coordinates = {
  longitude?: number;
  latitude?: number;
};

const useLocation = () => {
  const [location, setLocation] = useState<Coordinates | null>();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const location = await Location.getLastKnownPositionAsync();
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
