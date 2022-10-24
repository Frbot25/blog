const pool = require('../database');
class Admin  {
    constructor(obj = {}) {
        for (const propname in obj) {
            this[propname] = obj[propname];
        }
    }
    static async findAdminById(id) {
        try {
            console.log(id)
            const {rows} = await pool.query(`SELECT * FROM "user" WHERE id=$1`, [id]);
            console.log(rows)
            const user = {
                id: id,
                username: rows[0].user_name,
                roleId: rows[0].role_id
            }
            return user;
        }catch(error) {

        }
    }
}
module.exports = Admin;