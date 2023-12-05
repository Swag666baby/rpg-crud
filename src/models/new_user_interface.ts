export default interface NewUser {
  "name": string,
  "id": string,
  "life": number,
  "patent": string,
  "strength": number,
  "level": number,
  "xp": number,
  "coins": number,
  "team": string,
  "character": {
    "class": string,
    "inventory": {
      "tools": {
        "pickaxe": {
        	"durability": number 
        },
        "fisher_rod": {
        	"durability": number 
        }
      },
      "equipped": {
        "armor": {
          "helm": string,
          "breastplate": string,
          "pants": string,
          "boot": string
        },
        "weapons": {
          "primary": string,
          "secondary": string
        }
      },
      "unequipped": [
      ]
    }
  }
}
