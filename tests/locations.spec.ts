import supertest from "supertest";
import app from "../src/app";
import { LocationInput } from "services/locations-service";

const server = supertest(app);

describe("locations suit", () => {
  it("should create a location", async () => {
    const location: LocationInput = {
      name: "São Paulo",
      description: "Terra da garoa",
    };

    const result = await server.post("/locations").send(location);
    expect(result.status).toBe(201);
  });

  it("should return all locations", async () => {
    const result = await server.get("/locations");

    expect(result.status).toBe(200);
    expect(result.body.length).toBe(1);
  });

  it("can't duplicate a location", async () => {
    const location: LocationInput = {
      name: "São Paulo",
      description: "Terra da garoa",
    };

    const result = await server.post("/locations").send(location);

    expect(result.status).toBe(409);
  });

  it("should stop incomplete location", async () => {
    const location = {
      name: "São Paulo",
    };

    const result = await server.post("/locations").send(location);

    expect(result.status).toBe(422);
  });
});
