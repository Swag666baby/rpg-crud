import {Router, requests, response} from "express";
import {allUsers} from "../controllers/userControllers";
const routes = Router();

routes.get("/", async(request, response)=>{
    const users = await allUsers();
    await response.send(users)
})
export default routes;