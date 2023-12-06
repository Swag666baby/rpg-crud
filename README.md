<p align="center">
 <img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png"/>

<img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

# necessary 

## typescript 
```
npm install -g typescript
```

## running 
```bash
git clone https://github.com/Swag666baby/rpg-crud
cd rpg-crud 
yarn
npm run build
npm start
```

## examples 
**• to create a new user 🖊️**
```typescript 
import axios from "axios";

const newUser = async() => {
    const post = await axios.post("http://localhost:3000/register", 
    {
        "id": "<randomId>",
        "name": "<userName>",
        "class": "<youClass">,
        "primary_weapon": "<youPrimaryWeapon>",
        "secondary_weapon": "<youSecondaryWeapon>"
    })
    console.log(post.data)
}
```

**• to modify the coins, rank, name and everything else ✏**
```typescript 
import axios from "axios";

const newNameUser = async() => {
    const post = await axios.post("http://localhost:3000/modify", {"id": "<youId>", "name": "<newNameUser>"})
    console.log(post.data)
}
```

**• to delete a user 🗑**
```typescript 
import axios from "axios";

const deleteUser = async() => {
    const post = await axios.post("http://localhost:3000/delete", {"id": "<youId>"})
    console.log(post.data)
}
```

**• to search a user 🔎**
```typescript 
import axios from "axios";

const searchUser = async() => {
    const request = await axios.get("http://localhost:3000/search?id=youId")
    console.log(request.data)
}
```

**• to have a view of all registered users 📃**
```typescript
import axios from "axios";

const allUsers = async() => {
    const request = await axios.get("http://localhost:3000/")
    console.log(request.data)
}
```
Some items are changed automatically, so I chose not to allow modification via the `modify` route. items like `xp`, `level` and `patent`. 
but if you still want to change them via route, go to `src/routes/modifyUsers.ts` and add them to `newData`. 
