import * as express from "express";
import * as bodyParser from "body-parser";
import deleteUsers from "./routes/deleteUsers";
import modifyUsers from "./routes/modifyUsers";
import searchUsers from "./routes/searchUsers";
import registerUsers from "./routes/registerUsers";
import allUsers from "./routes/allUsers";

const app = express();
app.use(bodyParser.json());

app.use("/",
deleteUsers,
modifyUsers,
searchUsers,
registerUsers,
allUsers
);

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
});