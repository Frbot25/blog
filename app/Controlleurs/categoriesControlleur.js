const { request, response } = require("express");
const Categories = require('../models/categories');

const categoriesControlleur = {
    getAllCategories: async (request,response) => {
        try {
            const categories = await Categories.findAllCategories();
            if (categories === "") {
                response.status(200).json('pas de contenu');
            } else {
                console.log(categories)
                response.status(200).json(categories);
            }
        }catch(error) {
            console.trace(error);
           response.status(500).json(error.message);
        }
    },
    getOneCategory: async (request,response) => {
        const id = request.params.id;
        console.log(id)
        const category = await Categories.findOneCategory(id);
        if (category === "") {
            response.status(200).json('pas de contenu');
        } else {
            response.status(200).json(category);
        }
    },
    putOneCategory: async (request,response) => {
        try {
            let userDatas = {
                id : request.params.id,
            };
            console.log(userDatas);
            //boucler sur les propriétés de request.body pour ne mettre à jour que celles qui ont été envoyées
            for (const key in request.body) {
                userDatas[key] = request.body[key]
            }
            const category = await new Categories(userDatas).updateOneCategory();
            response.status(201).json(category);
          }catch(error) {
            console.trace(error);
               response.status(500).json(error.message);
          }
    },
    deleteOneCategory: async (request,response) => {
        try {
            const id = parseInt(request.params.id,10);
            console.log(id);
            const item = await new Categories().deleteOneCategory(id);
            response.status(201).json({success: true});
            

        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
    save : async (request, response) => {
        try {
            const category = await new Categories(request.body).saveItem();
                response.status(201).json(category);
        } catch(error) {
           console.trace(error);
           response.status(500).json(error.message);
        }
    },

}
module.exports = categoriesControlleur;