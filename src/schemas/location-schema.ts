import joi from "joi";
import { LocationInput } from "../services/locations-service";

export const locationSchema = joi.object<LocationInput>({
  name: joi.string().required(),
  description: joi.string().required()
});
