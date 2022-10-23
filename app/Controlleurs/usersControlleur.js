const { request, response } = require("express");

const usersControlleur = {
    getAllUsers: async (request, response) => {
        response.json({users: "page all users"})
    },
    getOneUserById: async (request,response) => {
        const user_id = request.params.id
        response.status(200).send({
            view_user:{
            id: user_id,
            username: "Fred",
            email: "fred@gmail.com"
        }});
    },
    putOneUserById: async (request,response) => {
        const user_id = request.params.id
        response.status(200).json({
            modify_user:{
            id: user_id,
            username: "Fred",
            email: "fred@gmail.com"
        }});
    },
    deleteUserById: async (request,response) => {
        response.status(200).send("delete user with id");
    }
}
module.exports = usersControlleur;