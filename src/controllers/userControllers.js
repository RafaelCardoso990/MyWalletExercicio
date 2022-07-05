import * as userService from "../services/userService.js"
import * as userMiddleware from "../middlewares/userMiddleware.js"


async function createUser(req,res){
   

        const {name, email, password} = req.body

        await userMiddleware.findUser({email})

        await userService.signUp({
            name, email, password
        })
        res.sendStatus(201)   
}



export {createUser};