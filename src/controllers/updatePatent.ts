import * as fs from "fs";
import {searchUser, modifyUsers} from "./userControllers";
const patentes = JSON.parse(fs.readFileSync("database/patents.json").toString());

export const updatePatent = async(id) => {
	const userData = await searchUser(id)
	
    let patente = "🥉I";
    for(let i = 0; i < patentes.length; i++){
        if(userData?.xp >= patentes[i].xp){
            patente = patentes[i].patente;
        }else{
            break;
        }
    }
    if(userData?.patent !== patente){
        modifyUsers(id, {"patent": patente})
    }
}
