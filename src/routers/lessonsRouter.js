import { Router } from "express";
import getAlllessons from "../controllers/lessonsController.js";

const lessonsRouter = Router();


//http://localhost:8000/api/v1/lessons
lessonsRouter.get("/", getAlllessons)

export default lessonsRouter;

