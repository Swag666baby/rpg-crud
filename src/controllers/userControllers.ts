import {Post} from "../models/userModels";

export const deleteUser = async(id) => {
    await Post.findOneAndDelete({id: id})
}
export const searchUser = async(id) => {
    const response = await Post.findOne({id: id})
    return response;
}
export const allUsers = async() => {
    const response = await Post.find()
    return response;
}
export const modifyUsers = async(id, newData) => {
  const response = await Post.findOneAndUpdate({id: id}, newData, { new: true });
  return response;
};
