const { response } = require("express");
const Tags = require('../models/tags');
const tagsControlleur = {
    getAllTags: async (require, response) => {
        try {
            const tags = await Tags.findAllTags();
            if (tags === "") {
                response.status(200).json('pas de contenu');
            } else {
                console.log(tags)
                response.status(200).json(tags);
            }
        }catch(error) {
            console.trace(error);
           response.status(500).json(error.message);
        }
    },
    getOneTags: async (request, response) => {
        try {
        const id = request.params.id;
        console.log(id)
        const tag = await Tags.findOneTag(id);
        if (tag === "") {
            response.status(200).json('pas de contenu');
        } else {
            response.status(200).json(tag);
        }
        }catch(error) {
            console.trace(error);
            response.status(500).json(error.message);
        }
        
    },
    putOneTags: async (request, response) => {
        try {
            let userDatas = {
                id : request.params.id,
            };
            console.log(userDatas);
            //boucler sur les propriétés de request.body pour ne mettre à jour que celles qui ont été envoyées
            for (const key in request.body) {
                userDatas[key] = request.body[key]
            }
            const tag = await new Tags(userDatas).updateOneTag();
            response.status(201).json(tag);
          }catch(error) {
            console.trace(error);
               response.status(500).json(error.message);
          }
    },
    deleteOneTags: async (request, response) => {
        try {
            const id = parseInt(request.params.id,10);
            console.log(id);
            const item = await new Tags().deleteOneTag(id);
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
            const tag = await new Tags(request.body).saveTag();
                response.status(201).json(tag);
        } catch(error) {
           console.trace(error);
           response.status(500).json(error.message);
        }
    },
}
module.exports = tagsControlleur;