const Item = require('../models/item');
const itemControlleur = {
    getAllItems: async (request, response) => {
        try {
            const items = await Item.findAllItems();
            if (items === "") {
                response.status(200).json('pas de contenu');
            } else {
                response.status(200).json(items);
            }
        }catch(error) {
            console.trace(error);
           response.status(500).json(error.message);
        }
       
        
    },
    getOnItemsById: async (request, response) => {
        const id = request.params.id;
        console.log(id)
        const item = await Item.findOneItem(id);
        if (item === "") {
            response.status(200).json('pas de contenu');
        } else {
            response.status(200).json(item);
        }
    },
    putOnItemsById: async (request, response) => {
      try {
        let userDatas = {
            id : request.params.id,
        };
        console.log(userDatas);
        //boucler sur les propriétés de request.body pour ne mettre à jour que celles qui ont été envoyées
        for (const key in request.body) {
            userDatas[key] = request.body[key]
        }
        const card = await new Item(userDatas).updateOneItem();
        response.status(201).json(card);
      }catch(error) {
        console.trace(error);
           response.status(500).json(error.message);
      }
    },
    DeleteOnItemsById: async (request, response) => {
        try {
            const id = parseInt(request.params.id,10);
            console.log(id);
            const item = await new Item().deleteOneItem(id);
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
            const card = await new Item(request.body).saveItem();
                response.status(201).json(card);
        } catch(error) {
           console.trace(error);
           response.status(500).json(error.message);
        }
    },
}

module.exports = itemControlleur;