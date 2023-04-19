import { Request, Response } from "express";
import httpStatus from "http-status";

import locationsService, { LocationInput } from "../services/locations-service";

export function getLocations(req: Request, res: Response) {
  const locations = locationsService.getLocations();
  res.send(locations);
}

export function createLocation(req: Request, res: Response) {
  const location = req.body as LocationInput;
  try {
    locationsService.createLocation(location);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
}