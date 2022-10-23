const { request, response } = require("express");
const Users = require('../models/users');
const jwt = require('../services/jwt');

const usersControlleur = {
    getAllUsers: async (request, response) => {
        try {
            const user = await Users.findAllUsers();
        if (user === "") {
            response.status(200).json('pas de contenu');
        } else {
            console.log(user)
            response.status(200).json(user);
        }
        }catch(error) {
            console.log("error controlleur",error);
            response.status(500).json(error);
        }
        
    },
    getOneUserById: async (request,response) => {
        try {
            let id = request.params.id;
            const user = await Users.findOneUser(id);
            if (user === "") {
                response.status(200).send('pas de contenu');
            } else {
                response.json(user);
            }
        }catch(error) {
            console.log("error controlleur",error);
            response.status(500).json(error);
        }
    },
    login: async (request,response) => {
        try {
        let body = request.body;
        console.log("body dans controller", body)
        const user = await new Users(body).Login();
        console.log("user dans controlleur login",user)
        const accessToken = jwt.makeToken(user.id);
        console.log(accessToken);
        const refreshToken = jwt.refreshToken(user.id);
        response.header({'Authorization': accessToken,'refreshToken': refreshToken}).send({accessToken: accessToken, refreshToken: refreshToken,user,});
        }catch(error){
            console.log("error controlleur",error);
            
        }
    },
    deleteUserById: async (request,response) => {
        try {
            const id = parseInt(request.params.id,10);
            console.log(id);
            const user = await new Users(id).deleteUserById(id);
            response.status(201).json({success: true});
            

        } catch(error) {
           //lire l'erreur
           console.trace(error);
           //envoyer l'info au front
           response.status(500).json(error.message);
        }
    },
    registerUser: async (request, response) => {
        let data = request.body;
        console.log(data);
        const user = await new Users().registerUser(data); 
        response.send({user});
    },
    updateUserById: async (request,response) => {
        try {
            let userDatas = {
                id : request.params.id,
            };
            //boucler sur les propriétés de request.body pour ne mettre à jour que celles qui ont été envoyées
            for (const key in request.body) {
                userDatas[key] = request.body[key]
            }
            //console.log({userDatas});
            const user = await new Users(userDatas).updateUserById();
            response.status(201).json(user);
        }catch(error) {
            console.log("error controlleur",error);
            response.status(500).json(error.message);
        }
    }
}
module.exports = usersControlleur;