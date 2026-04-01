import Courses from "../db/Courses.js";

const coursesInstance = new Courses();

const createCourse = (req,res) => {
    try {
        
        if(!req.body){
            throw new Error("Req body hasn't been parsed!")
        }

        const newCourse = req.body;
        const userId = req?.user?.userId;


        if(!userId) {
            res.status(401).json({
                success: false,
                message:"user unauthorised"
            })
        }

        newCourse.userId = userId

        if(!newCourse.name){
           throw new Error ("name for the course to create one, should be required!")
        }
        const createdNewCourse = coursesInstance.createCourse(newCourse)

        if(!createdNewCourse.id){
              throw new Error("course hasn't been created, please try again!")
        }

        res.status(200).json({
            success:true,
            data:createdNewCourse,
            message:"course has been created successfully!"
        })

    } catch (error) {
       res.status(400).json({
        success:false,
        error:error,
        message:error.message
       }) 
    }

}

const getAllCourses = (req,res) => {
    res.status(200).json({
        success:true,
        data:coursesInstance.courses,
        message:"Courses have been created successfully!"
    })
    
}

const getCourseById = (req, res) => {
    try {
        const courseId = req.params.courseId
    const courseWithCourseId = coursesInstance.getCourseById(courseId);
    if(!courseWithCourseId){
         throw new Error("Course doesn't exist with this id!")
    }
       res.status(200).json ({
        success:true,
        data:courseWithCourseId,
        message:"Courses with id has been fetched successfully!"
       })
    } catch (error) {
        res.status(400).json({
        success:false,
        error:error,
        message:error.message
       }) 
    }
    
}

export  {
    getAllCourses,
    createCourse,
    getCourseById
}