import {connect, Schema, model} from "mongoose";

connect("mongodb+srv://rpg-crud:baby@rpg-crud.1om9yyt.mongodb.net/rpg-crud?retryWrites=true&w=majority")
.then(() => console.log("connected to the database. "));

const dataSchema = new Schema({
  "name": String,
  "id": String,
  "life": Number,
  "patent": String,
  "strength": Number,
  "level": Number,
  "xp": Number,
  "coins": Number,
  "team": String,
  "character": {
    "class": String,
    "inventory": {
      "tools": {
        "pickaxe": {
        	"durability": Number
        },
        "fisher_rod": {
        	"durability": Number
        }
      },
      "equipped": {
        "armor": {
          "helm": String,
          "breastplate": String,
          "pants": String,
          "boot": String
        },
        "weapons": {
          "primary": String,
          "secondary": String
        }
      },
      "unequipped": [
        {
          "name": String,
          "quantity": Number
        }
      ]
    }
  }
});

export const Post = model('Post', dataSchema);

