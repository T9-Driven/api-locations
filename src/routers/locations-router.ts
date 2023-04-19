import { Router } from "express";

import { createLocation, getLocations } from "../controllers/locations-router";
import { validateSchemaMiddleware } from "../middlewares/schemaValidatorMiddleware";
import { locationSchema } from "../schemas/location-schema";

const locationsRouter = Router();

locationsRouter.get("/locations", getLocations);
locationsRouter.post("/locations", validateSchemaMiddleware(locationSchema), createLocation);

export default locationsRouter;