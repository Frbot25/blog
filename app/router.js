const {Router, request, response} = require('express');

const router = Router();
/**
 * routes /home
 * Get all items
 **/
router.get('/', (request, response) => {
    response.json({page_home:'Home'})
});
/**
 * routes /users
 * get all users
 **/
 router.get('/users', (request, response) => {
    response.json({users: "page all users"})
});
/**
 * routes /users/:id
 * get one user by id
 **/
 router.get('/users/:id', (request, response) => {
    response.status(200).send({
        view_user:{
        id: 1,
        username: "Fred",
        email: "fred@gmail.com"
    }});
})
/**
 * routes /users/:id
 * put one user by id
 **/
 router.put('/users/:id', (request, response) => {
    console.log('user')
    response.status(200).json({
        modify_user:{
        id: 1,
        username: "Fred",
        email: "fred@gmail.com"
    }});
});
/**
 * routes /users/:id
 * delete user by id
 **/
 router.delete('/users/:id', (request, response) => {
    response.status(200).send("delete user with id");
});
/**
 * routes /categories
 * get all categories
 **/
 router.get('/categories', (request, response) => {
    response.send('Page view all categories !')
});
/**
 * routes /categories/:id
 * get category by id
 **/
 router.get('/categories/:id', (request, response) => {
    response.json({
        viewOnecategory: {
        id: 1,
        name: "Jeux vidéo"
    }})
});
/**
 * routes /categories/:id
 * put category by id
 **/
 router.put('/categories/:id', (request, response) => {
    response.status(200).json({
        modify_category:{
            id: 1,
            name: "Jeux vidéo"
    }});
});
/**
 * routes /categories/:id
 * 
 **/
 router.delete('/categories/:id', (request, response) => {
    response.send("delete catégory by id");
});
/**
 * routes /tags/
 * view all tags
 **/
 router.get('/tags', (request, response) => {
    response.send("Page view all tags");
});
/**
 * routes /tags/
 * view one tag by id
 **/
 router.get('/tags/:id', (request, response) => {
    response.status(200).json({
        viewOneTag: {
            id: 1,
            name: "rpg",
            color: "#f1f1f1"
        }
    });
    
});
/**
 * routes /tags/
 * modify one tag by id
 **/
 router.put('/tags/:id', (request, response) => {
    response.status(200).json({
        modifyOneTag: {
            id: 1,
            name: "rpg",
            color: "#f1f1f1"
        }
    });
    
});
/**
 * routes /tags/
 * delete one tag by id
 **/
 router.delete('/tags/:id', (request, response) => {
    response.status(200).send("Delet tag by id");
 });

module.exports = router;