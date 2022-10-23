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
    static async findOneItem(id) {
        try {
            console.log(id)
            const {rows} = await pool.query(`SELECT * FROM item WHERE id=$1`, [id]);
            console.log(rows[0])
            return rows[0];
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
    //enregistrer un article
    async saveItem() {
        try {
        //insérer les valeurs avec une fonction new_item
        const {rows} = await pool.query('SELECT new_item($1) AS id', [this]);
        this.id = rows[0].id;
        //puis insérer les valeurs dans les tables de liaison
            //1. catégorie
        await pool.query('SELECT item_category($1) AS id', [this]);
         //2. ajouter la carte dans les favoris utilisateur
         await pool.query('SELECT user_item($1) AS id', [this]);
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
    async updateOneItem() {
        try {
            console.log(this)
            const {rows} = await pool.query('SELECT * FROM update_item($1)', [this]);
           // this.id = rows[0].id;
            console.log(rows)
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
     async deleteOneItem(id) {
        try {
            console.log(id)
            await pool.query('DELETE FROM "item" WHERE id =$1', [id])
        } catch (error) {
            console.trace(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}
module.exports = Items;