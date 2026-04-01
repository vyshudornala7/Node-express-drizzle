import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1];
        console.log(accessToken);

        const decodedUserData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        console.log("Decoded Data: ", decodedUserData);

        req.user =decodedUserData; // attache
        next();

    } catch (error) {
        res.status(401).json({
            success:false,
            error:error?.message,
            message:error?.message ?? "User not authorized!"
        })
    }
}


export default checkAuth;