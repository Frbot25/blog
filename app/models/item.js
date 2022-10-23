const pool = require('../database')
class Items {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAllItems() {
        const {rows} = await pool.query(`SELECT * FROM item ORDER BY createdAt DESC`);
            return rows.map(row => new Items(row));

    }
    static async findOneItem() {
        
    }
    static async updateOneItem() {
        
    }
    static async deleteOneItem() {
        
    }
}
module.exports = Items;