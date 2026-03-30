import Users from "../db/Users.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt-tokens.js";

const usersInstance = new Users();

const registerNewUser = (req,res) => {
    try {
        const newUserData = req.body;
        // console.log(newUserData)
        //save the new user data in database .( users table)
        const savedUser = usersInstance.createNewUser(newUserData);
        // console.log(savedUser)
        res.status(201).json({
            success:true,
            data:savedUser,
            message:"New user has been saved successfully!"
        })

    } catch (error) {
        res.status(400).json ({
            success: false,
            error:error,
            message:error.message
        })
        
    }

}

const logInUser = (req,res) => {
    try {
        const userToLogIn = req.body;
        // console.log(userToLogIn)
        // get thye existing user via user email while logging in 
        const existingUserData = usersInstance.getUserByEmail(userToLogIn.email);


        if(!existingUserData){
            throw new Error ("Email is wrong or User not found!")
        }

       
        // to save the user data inside the gibber token  string - for authentication and authorization put
        const accessToken = generateAccessToken(existingUserData.id);
        const refreshToken = generateRefreshToken(existingUserData.id);

        //save the refreshToken key value in user object

        const isProduction = process.env.NODE_ENVIRONMENT === "production" ? true : false;

        // set the cookie : refreshToken
        res.cookie("refreshToken", refreshToken,{
            httpOnly: true,
            secure: isProduction ? true : false,
            maxAge: 7 * 24 * 60 * 60 * 1000  // 7days
        })

        res.status(200).json({
            success:true,
            data:{
                loggedUserData: existingUserData,
                accessToken,
                refreshToken
            }
        })
    } catch (error) {
        res.status(400).json ({
            success: false,
            error:error,
            message:error.message
        })
        
    }

}

const refreshAccessToken = (req,res) => {
    try {
        
    } catch (error) {
        res.status(400).json ({
            success: false,
            error:error?.message,
            message:error?.message ?? "Refresh api failed!"
        })
    }

}

export {
    registerNewUser,
    logInUser,
    refreshAccessToken
}