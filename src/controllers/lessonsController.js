const lessons = []

const getAlllessons= (req,res,next) => {
    res.status(200).json({
        success:true,
        data:lessons,
        message:"lessons have been fetched,successfully!"
    })
    
}

export  default getAlllessons;