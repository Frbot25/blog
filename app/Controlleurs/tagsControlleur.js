const { response } = require("express");

const tagsControlleur = {
    getAllTags: async (require, response) => {
        response.send("Page view all tags");
    },
    getOneTags: async (require, response) => {
        response.status(200).json({
            viewOneTag: {
                id: 1,
                name: "rpg",
                color: "#f1f1f1"
            }
        });
    },
    putOneTags: async (require, response) => {
        response.status(200).json({
            modifyOneTag: {
                id: 1,
                name: "rpg",
                color: "#f1f1f1"
            }
        });
    },
    deleteOneTags: async (require, response) => {
        response.status(200).send("Delete tag by id");
    },
}
module.exports = tagsControlleur;