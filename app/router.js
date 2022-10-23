const {Router, request, response} = require('express');
const itemControlleur = require('./Controlleurs/itemsControlleur');
const usersControlleur = require('./Controlleurs/usersControlleur');
const categoriesControlleur = require('./Controlleurs/categoriesControlleur');
const tagsControlleur = require('./Controlleurs/tagsControlleur');
const router = Router();
/**
 * routes /home
 * Get all items
 **/
router.get('/', itemControlleur.getAllItems);
/**
 * routes /users
 * get all users
 **/
 router.get('/users', usersControlleur.getAllUsers );
/**
 * routes /users/:id
 * get one user by id
 **/
 router.get('/users/:id',usersControlleur.getOneUserById)
/**
 * routes /users/:id
 * put one user by id
 **/
 router.put('/users/:id', usersControlleur.putOneUserById);
/**
 * routes /users/:id
 * delete user by id
 **/
 router.delete('/users/:id', usersControlleur.deleteUserById);
/**
 * routes /categories
 * get all categories
 **/
 router.get('/categories', categoriesControlleur.getAllCategories);
/**
 * routes /categories/:id
 * get category by id
 **/
 router.get('/categories/:id', categoriesControlleur.getOneCategory);
/**
 * routes /categories/:id
 * put category by id
 **/
 router.put('/categories/:id', categoriesControlleur.putOneCategory);
/**
 * routes /categories/:id
 * 
 **/
 router.delete('/categories/:id', categoriesControlleur.deleteOneCategory);
/**
 * routes /tags/
 * view all tags
 **/
 router.get('/tags', tagsControlleur.getAllTags);
/**
 * routes /tags/
 * view one tag by id
 **/
 router.get('/tags/:id', tagsControlleur.getOneTags);
/**
 * routes /tags/
 * modify one tag by id
 **/
 router.put('/tags/:id', tagsControlleur.putOneTags);
/**
 * routes /tags/
 * delete one tag by id
 **/
 router.delete('/tags/:id', tagsControlleur.deleteOneTags);

module.exports = router;