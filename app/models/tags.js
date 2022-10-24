const pool = require('../database');
class Tags {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAllTags() {
        try {
            const {rows} = await pool.query(`SELECT * FROM tag ORDER BY createdAt DESC`);
            //console.log(rows)
            return rows.map(row => new Tags(row));

        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
    static async findOneTag(id) {
        try {
            console.log(id)
            const {rows} = await pool.query(`SELECT * FROM tag WHERE id=$1`, [id]);
            console.log(rows)
            return rows[0];
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
    async updateOneTag() {
        try {
            console.log(this)
            const {rows} = await pool.query('SELECT * FROM update_tag($1)', [this]);
           // this.id = rows[0].id;
            console.log(rows)
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
    async deleteOneTag(id) {
        try {
            console.log(id)
            await pool.query('DELETE FROM "tag" WHERE id =$1', [id])
        } catch (error) {
            console.trace(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
    async saveTag() {
        try {
            console.log(this)
            const {rows} = await pool.query('SELECT new_tag($1) AS id', [this]);
            console.log(rows[0])
        this.id = rows[0].id;
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
}
module.exports = Tags;