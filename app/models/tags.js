class Tags {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAllTags() {

    }
    static async findOneTag() {
        
    }
    static async updateOneTag() {
        
    }
    static async deleteOneTag() {
        
    }
}
module.exports = Tags;