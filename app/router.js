const {Router, request, response} = require('express');
const itemControlleur = require('./Controlleurs/itemsControlleur');
const usersControlleur = require('./Controlleurs/usersControlleur');
const categoriesControlleur = require('./Controlleurs/categoriesControlleur');
const tagsControlleur = require('./Controlleurs/tagsControlleur');
const checkJwt = require('./middlewares/checkJwt');
const checkAdmin = require('./middlewares/checkAdmin');
const router = Router();
/**
 * routes /home
 * Get all items
 **/
router.get('/', itemControlleur.getAllItems);
/**
 * routes /item 
 * post create new item 
 **/
 router.post('/items',checkJwt, itemControlleur.save);
/**
 * routes /home
 * Get one item by id
 **/
 router.get('/items/:id', itemControlleur.getOnItemsById);
 /**
 * routes /home
 * modify one item by id
 **/
  router.put('/items/:id',checkJwt, itemControlleur.putOnItemsById);
   /**
 * routes /home
 * delete one item by id
 **/
    router.delete('/items/:id',checkJwt, itemControlleur.DeleteOnItemsById);
/**
 * routes /users
 * get all users
 **/
 router.get('/users',checkJwt, usersControlleur.getAllUsers );
  /**
 * routes /login
 * Login user
 **/
   router.post('/login',  usersControlleur.login);
 /**
 * routes /users
 * get all users
 **/
  router.post('/users',checkJwt, usersControlleur.registerUser );
/**
 * routes /users/:id
 * get one user by id
 **/
 router.get('/users/:id',checkJwt,usersControlleur.getOneUserById)
 /**
 * routes /users/:id
 * get one user by id
 **/
  router.post('/users',checkJwt,usersControlleur.getOneUserById)
/**
 * routes /users/:id
 * put one user by id
 **/
 router.put('/users/:id',checkJwt, usersControlleur.updateUserById);
/**
 * routes /users/:id
 * delete user by id
 **/
 router.delete('/users/:id',checkJwt, usersControlleur.deleteUserById);
 /**
 * routes /categories
 * Add new category
 **/
  router.post('/categories',checkJwt, checkAdmin, categoriesControlleur.save);
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
 router.put('/categories/:id',checkJwt,checkAdmin, categoriesControlleur.putOneCategory);
/**
 * routes /categories/:id
 * delete category by id
 **/
 router.delete('/categories/:id',checkJwt,checkAdmin, categoriesControlleur.deleteOneCategory);
/**
 * routes /tags/
 * view all tags
 **/
 router.get('/tags', tagsControlleur.getAllTags);
 /**
 * routes /tags/
 * Add new tag
 **/
  router.post('/tags',checkJwt,checkAdmin, tagsControlleur.save);
/**
 * routes /tags/
 * view one tag by id
 **/
 router.get('/tags/:id', tagsControlleur.getOneTags);
/**
 * routes /tags/
 * modify one tag by id
 **/
 router.put('/tags/:id',checkJwt,checkAdmin, tagsControlleur.putOneTags);
/**
 * routes /tags/
 * delete one tag by id
 **/
 router.delete('/tags/:id',checkJwt,checkAdmin, tagsControlleur.deleteOneTags);

module.exports = router;