const pool = require('../database');
class Categories {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAllCategories() {
        try {
            const {rows} = await pool.query(`SELECT * FROM category ORDER BY createdAt DESC`);
            console.log(rows)
            return rows.map(row => new Categories(row));
        }catch(error) {

        }
    }
    static async findOneCategory(id) {
        try {
            console.log(id)
            const {rows} = await pool.query(`SELECT * FROM category WHERE id=$1`, [id]);
            console.log(rows[0])
            return rows[0];
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
     async updateOneCategory() {
        try {
            console.log("this dans update category",this)
            const {rows} = await pool.query('SELECT * FROM update_category($1)', [this]);
           // this.id = rows[0].id;
            console.log("row",rows)
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
    async deleteOneCategory(id) {
        try {
            console.log(id)
            await pool.query('DELETE FROM "category" WHERE id =$1', [id])
        } catch (error) {
            console.trace(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async saveItem() {
        try {
        //insérer les valeurs avec une fonction new_item
        const {rows} = await pool.query('SELECT new_category($1) AS id', [this]);
        this.id = rows[0].id;
       
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
}
module.exports = Categories;