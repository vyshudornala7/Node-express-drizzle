import { Router } from "express";
import { createCourse, getAllCourses,getCourseById } from "../controllers/coursesController.js";
import checkAuth from "../middleWares/checkAuth.js";


const coursesRouter = Router();


//http://localhost:8000/api/v1/courses
// middleware : do something in middle and proceed to newxt

coursesRouter.post("/", checkAuth,createCourse)
coursesRouter.get("/", getAllCourses)
coursesRouter.get("/:courseId", getCourseById)

export default coursesRouter;

