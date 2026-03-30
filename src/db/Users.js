import {v4 as uuidv4} from "uuid";

class Users{
    constructor() {
        this.users = []
    }

    createNewUser (newUserData) {
        const newUserId = uuidv4();
        newUserData.id = newUserId;
        console.log(newUserData)
        this.users.push(newUserData)
        return this.users.find((user) => user.id === newUserId);
    }

    getUserByEmail(userEmail) {
        return this.users.find((user) => user.email === userEmail);
    }
     
    saveThefreshToken(userId, refreshToken) {
        //homw work
    }

}

export default Users;