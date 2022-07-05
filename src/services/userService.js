import bcrypt from "bcrypt";
import * as userService from "../repositories/userRepository.js"

async function signUp({name, email, password}){
    if (!name || !email || !password) {
        throw Error({type: "input-not-found", message: "put all the data"})
    }

    const hashedPassword = bcrypt.hashSync(password, 12);
    

    return userService.insertUser({
      name,
      email,
      password: hashedPassword      
    });
}

export {
    signUp,
}