class Users {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAllUsers() {

    }
    static async findOneUser() {
        
    }
    static async updateOneUser() {
        
    }
    static async deleteOneUser() {
        
    }
}
module.exports = Users;