const pool = require('../database');
const bcrypt = require('bcrypt');
class Users {
     /**
     * User table constructor
     * @param {object} obj literal object with properties copied in instance
     */
      constructor(obj = {}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }
    static async findAllUsers() {
        try {
            const { rows } = await pool.query(`SELECT * FROM "user"`);
            console.log("row",rows)
            return rows.map(row => new Users(row))
        }catch(error) {
            console.log(error);
        }

    }
    static async findOneUser(id) {
        const { rows } = await pool.query(`SELECT * FROM "user" WHERE id=$1`, [id]);
            console.log(rows[0])
            if (rows[0] === undefined) {
                return ("pas de corespondance !")
            }
            return rows[0]
    }
    async updateUserById(id) {
        try {
            //bcrypt sur le password s'il existe
            if (this.password) {
                console.log("update >> --> il y a un password, je le crypte et je remplace celui qui se trouve dans this");
                const passwordCrypted = await bcrypt.hash(this.password, 10);
                this.password = passwordCrypted;
                console.log('update : nouveau this= ',this);
            }
            //updater l'enregistrement
            const {rows} = await pool.query('SELECT * FROM update_user($1)', [this]);

            console.log("user.rows",rows)
            if (rows[0].update_user === null) {
                const  result  = await pool.query(`SELECT * FROM "user" WHERE id=$1`,[this.id]);
                console.log(result.rows[0].id)
                let userSecure = {
                    id: result.rows[0].id,
                    username: result.rows[0].user_name,
                    email: result.rows[0].email,
                    createdAt: result.rows[0].createdat
                };
                console.log('userSecure',userSecure);          
                 //renvoyer le user au controller            
                return userSecure;
            }


        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
       
    }
    async Login() {
        try {
            //comparer l'email de connexion avec la DB dans la table user
            console.log('this dans modele',this)
            const { rows } = await pool.query(`SELECT * FROM "user" WHERE id=(SELECT id FROM "user" WHERE email = $1);`, [this.email]);//this vient du constructeur
            console.log("resultat requete",rows[0]);
            //stocker l'id trouv?? dans la table user
            const id = rows[0].id;
            console.log("J'ai trouv?? le user" + id );
            //si pas de r??ponse => retourner l'erreur
            if (!rows[0].id) {
                console.log("les emails ne correspondent pas, je renvoie l'erreur au client sans pr??ciser la cause pour des raisons de s??curit??");
                throw new Error('Identification failed');
            }
            //v??rifier que les mots de passe correspondent
            console.log("Maintenant je v??rifie que les mots de passe correspondent\n...");
            const isValid = await bcrypt.compare(this.password, rows[0].password);
                if (!isValid) {
                    console.log("ce n'est pas bon, on renvoie une erreur au client sans pr??ciser la raison par s??curit??");
                    throw new Error('Identification failed');
                }
            console.log("v??rif ok!\n");
            let userSecure = {
                id: rows[0].id,
                username: rows[0].user_name,
                email: rows[0].email,
                roleId: rows[0].role_id,
                createdAt: rows[0].createdat
            };
            return userSecure;
        }catch(error) {
            console.log(error.detail);
            return error.detail;
        }
    }
    async registerUser(data) {
        try {
            const {email, password, username} = data;
            // hash du password (obligatoire ?? cause de joi)
            let saltRounds = await bcrypt.genSalt(10);
            let HashedPassword = await bcrypt.hash(password, saltRounds);
            console.log("je hash le password", {HashedPassword});
            const {rows} = await pool.query('INSERT INTO "user" (email, password, user_name, role_id) VALUES ($1, $2, $3, $4) RETURNING *', [
                email,
                HashedPassword,
                username,
                //id du r??le par d??faut (utilisateur)
                1
            ]);
            console.log("\n voici le r??sultat",rows[0]);
            // creer un user pour securiser
            const userSecure = {
            id: rows[0].id,
            username: data.username,
            email: data.email,
            createdAt: rows[0].createdat
        }
        console.log("\n et mon user s??curis?? qui va ??tre renvoy?? au controller", {userSecure});
        
        return userSecure;
        }catch(error) {
            console.log(error.detail);
           return error.detail;
        }

    }
    async deleteUserById(id) {
        try {
            await pool.query('DELETE FROM "user" WHERE id =$1', [id])
        } catch (error) {
            console.trace(error);
            throw new Error(error.detail ? error.detail : error.message);
        }
    }
}
module.exports = Users;