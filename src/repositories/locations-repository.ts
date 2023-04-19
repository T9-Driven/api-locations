import locations from "../data/locations";
import { LocationInput } from "../services/locations-service";

export type Location = {
  id: number,
  name: string,
  description: string
}

function getLocations(): Location[] {
  return locations;
}

function getSpecificLocation(id: number): Location | undefined {
  return locations.find(location => {
    return location.id === id;
  });
}

function getSpecificLocationByName(name: string): Location | undefined {
  return locations.find(location => {
    return location.name === name;
  });
}

function insertLocation(location: LocationInput) {
  const id = locations.length + 1;
  locations.push({ ...location, id }); // id único
}

const locationsRepository = {
  getLocations,
  getSpecificLocation,
  getSpecificLocationByName,
  insertLocation
}

export default locationsRepository;