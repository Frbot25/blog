class Items {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAllItems() {

    }
    static async findOneItem() {
        
    }
    static async updateOneItem() {
        
    }
    static async deleteOneItem() {
        
    }
}
module.exports = Items;