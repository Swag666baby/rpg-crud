import {Router, request, response} from "express";
import {searchUser, modifyUsers} from "../controllers/userControllers";
import {updatePatent} from "../controllers/updatePatent";
import {updateLevel} from "../controllers/updateLevel";
const routes = Router();

routes.post("/modify", async(request, response) => {
    const userExists = await searchUser(request.body.id)
    if(userExists){
        const newData = {
            "name": request.body.name,
            "id": request.body.id,
            "life": request.body.life,
            "strength": request.body.strength,
            "coins": request.body.coins,
            "team": request.body.team,
            "character.inventory.tools.pickaxe.durability": request.body.character?.inventory?.tools?.pickaxe?.durability,
            "character.inventory.tools.fisher_rod.durability": request.body.character?.inventory?.tools?.fisher_rod?.durability,
            "character.inventory.equipped.armor.helm": request.body.character?.inventory?.equipped?.armor?.helm,
            "character.inventory.equipped.armor.breastplate": request.body.character?.inventory?.equipped?.armor?.breastplate,
            "character.inventory.equipped.armor.pants": request.body.character?.inventory?.equipped?.armor?.pants,
            "character.inventory.equipped.armor.boot":request.body.character?.inventory?.equipped?.armor?.boot,
            "character.inventory.equipped.weapons.primary": request.body.character?.inventory?.equipped?.weapons?.primary,
            "character.inventory.equipped.weapons.secondary":request.body.character?.inventory?.equipped?.weapons?.secondary,
            "character.inventory.unequipped":request.body.character?.inventory?.unequipped,
        }
        await modifyUsers(request.body.id, newData)
        await updateLevel(request.body.id)
        await updatePatent(request.body.id)
        response.send({"message":"Successfully changed data!"})
    }else{
        response.send({"error":"User not found!"})
    }
});

export default routes;
