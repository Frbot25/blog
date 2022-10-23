const { request, response } = require("express");

const categoriesControlleur = {
    getAllCategories: async (request,response) => {
        response.send('Page view all categories !');
    },
    getOneCategory: async (request,response) => {
        response.json({
            viewOnecategory: {
            id: 1,
            name: "Jeux vidéo"
        }})
    },
    putOneCategory: async (request,response) => {
        response.status(200).json({
            modify_category:{
                id: 1,
                name: "Jeux vidéo"
        }});
    },
    deleteOneCategory: async (request,response) => {
        response.send("delete catégory by id");
    },

}
module.exports = categoriesControlleur;