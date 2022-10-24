const Admin = require('../models/Admin');
module.exports = (request, response, next) => {
    //stocker l'id et appeler next
    try {
        const id = request.userId;
        console.log(id)
           const test = async () => {
           const admin = await Admin.findAdminById(id);
            console.log(admin);
            if (admin.roleId === 2) {
                console.log("ok");
                next();
            } else {
                return response.json("no authorized");
            }
           }
        test();
       
    } catch (error) {
        response.status(401).json(error.message);
    }
}