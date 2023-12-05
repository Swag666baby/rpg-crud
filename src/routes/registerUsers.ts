import {Router, request, response} from "express";
import {searchUser} from "../controllers/userControllers";
import {registerUser} from "../controllers/registerController";
const routes = Router();

routes.post("/register", async(request, response) => {
    const userExists = await searchUser(request.body.id)
    if(!userExists){
        registerUser(
            request.body.name,
            request.body.id, 
            request.body.class, 
            request.body.primary_weapon, 
            request.body.secondary_weapon
        );
        response.send({"message":"successfully registered user!"});
    }else{
        response.send({"error":"user already registered!"});
    }
});

export default routes;
