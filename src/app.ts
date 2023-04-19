import express, { json, Request, Response } from "express";
import locationsRouter from "./routers/locations-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => res.send("I'am alive!"));
app.use(locationsRouter);

export default app;
