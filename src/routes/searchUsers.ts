import {Router, requests, response} from "express";
import {searchUser} from "../controllers/userControllers";
const routes = Router();

routes.get("/search", async(request, response)=>{
    const result = await searchUser(request.query.id);
    if(result){
        response.send(result)
    }else{
        response.send({"error":"User not found!"})
    }
})
export default routes;
