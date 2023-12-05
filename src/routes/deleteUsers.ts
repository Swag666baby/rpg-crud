import {Router, request, response} from "express";
import {searchUser, deleteUser} from "../controllers/userControllers";
const routes = Router();

routes.post("/delete", async(request: request, response: response) => {
    const userExists = await searchUser(request.body.id)
    if(userExists){
        deleteUser(request.body.id)
        response.send({"message":"user deleted successfully!"})
    }else{
        response.send({"error":"User not found!"})
    }
});

export default routes;
