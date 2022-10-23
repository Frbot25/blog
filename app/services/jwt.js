const JWT = require('jsonwebtoken');
const {response} = require('express');


module.exports = {
    // access token
    makeToken: userId => {
        try {
            return JWT.sign(
                //payload
                {
                    userId
                },
                //le mot de passe de chiffrement
                process.env.TOKEN,
                //header
                {
                    algorithm: 'HS256',
                    expiresIn: '30m'


                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    //vérification access token
    validateToken: token => {
        try {
            return JWT.verify(
                token,
                process.env.TOKEN,
                {
                    algorithms: ['HS256']
                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    refreshToken: userId => {
        try {
            console.log('je suis dans le service refreshtoken et voila les infos de userId:',userId);
            return JWT.sign(
                //payload
                {
                    userId
                },
                //le mot de passe de chiffrement
                process.env.REFRESHTOKEN,
                //header
                {
                    algorithm: 'HS256',
                    expiresIn: '7d'

                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    //vérification access token
    validateRefreshToken: token => {
        try {
            
            return JWT.verify(
                token,
                process.env.REFRESHTOKEN,
                {
                    algorithms: ['HS256']
                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
}