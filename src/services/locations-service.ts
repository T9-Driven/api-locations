import locationsRepository, { Location } from "../repositories/locations-repository";

export type LocationInput = Omit<Location, "id">;

function getLocations() {
  return locationsRepository.getLocations();
}

function createLocation(location: LocationInput): void {
  const locationAlreadyRegistered = locationsRepository.getSpecificLocationByName(location.name);
  if (locationAlreadyRegistered) {
    throw { message: "This location already exists!" }
  }

  locationsRepository.insertLocation(location);
}

const locationsService = {
  getLocations,
  createLocation
}

export default locationsService;