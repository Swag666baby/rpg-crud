import {searchUser, modifyUsers} from "./userControllers";

export const updateLevel = async(id) => {
	const userData = await searchUser(id)
	const level = Math.round(userData?.xp/1000)
	const randomXp = Math.floor(Math.random() * 50)
	
    modifyUsers(id, {"xp": userData.xp + randomXp})
    if(level !== userData?.level){
    	modifyUsers(id, {"level": level})
    }
}