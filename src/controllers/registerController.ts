import NewUser from "../models/new_user_interface";
import {Post} from "../models/userModels";

export const registerUser = async(userName, id, classe, primaryWeapon, secondaryWeapon) => {
    const newUser: NewUser = {
  "name": userName,
  "id": id,
  "life": 100,
  "patent": "🥉I",
  "strength": 23,
  "level": 0,
  "xp": 0,
  "coins": 150,
  "team": " ",
  "character": {
    "class": classe,
    "inventory": {
      "tools": {
        "pickaxe": {
        	"durability": 0
        },
        "fisher_rod": {
        	"durability": 0
        }
      },
      "equipped": {
        "armor": {
          "helm": " ",
          "breastplate": " ",
          "pants": " ",
          "boot": " "
        },
        "weapons": {
          "primary": primaryWeapon,
          "secondary": secondaryWeapon 
        }
      },
      "unequipped": [
        
      ]
    }
  }
}
    await new Post(newUser).save();
}
