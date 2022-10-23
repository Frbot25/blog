class Categories {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAllCategories() {

    }
    static async findOneCategory() {
        
    }
    static async updateOneCategory() {
        
    }
    static async deleteOneCategory() {
        
    }
}
module.exports = Categories;