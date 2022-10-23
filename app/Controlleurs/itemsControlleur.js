const itemControlleur = {
    getAllItems: async (request, response) => {
        response.status(200).send('page All items !')
    },
    getOnItemsById: async (request, response) => {
        response.status(200).json({
            viewOneItem: {
            id: 1,
            title: "title articles",
            description: "jnjdnjdjfjnjfjfsfnsdjfjsfs"
        }})
    },
    putOnItemsById: async (request, response) => {
        response.status(200).json({
            modifyOneItem: {
            id: 1,
            title: "title articles",
            description: "jnjdnjdjfjnjfjfsfnsdjfjsfs"
        }})
    },
    DeleteOnItemsById: async (request, response) => {
        response.status(200).send("delete one item !")
    }
}

module.exports = itemControlleur;