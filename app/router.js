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
 * routes /item 
 * post create new item 
 **/
 router.post('/items', itemControlleur.save);
/**
 * routes /home
 * Get one item by id
 **/
 router.get('/items/:id', itemControlleur.getOnItemsById);
 /**
 * routes /home
 * modify one item by id
 **/
  router.put('/items/:id', itemControlleur.putOnItemsById);
   /**
 * routes /home
 * delete one item by id
 **/
    router.delete('/items/:id', itemControlleur.DeleteOnItemsById);
/**
 * routes /users
 * get all users
 **/
 router.get('/users', usersControlleur.getAllUsers );
  /**
 * routes /login
 * Login user
 **/
   router.post('/login',  usersControlleur.login);
 /**
 * routes /users
 * get all users
 **/
  router.post('/users', usersControlleur.registerUser );
/**
 * routes /users/:id
 * get one user by id
 **/
 router.get('/users/:id',usersControlleur.getOneUserById)
 /**
 * routes /users/:id
 * get one user by id
 **/
  router.post('/users',usersControlleur.getOneUserById)
/**
 * routes /users/:id
 * put one user by id
 **/
 router.put('/users/:id', usersControlleur.updateUserById);
/**
 * routes /users/:id
 * delete user by id
 **/
 router.delete('/users/:id', usersControlleur.deleteUserById);
 /**
 * routes /categories
 * Add new category
 **/
  router.post('/categories', categoriesControlleur.save);
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
 * delete category by id
 **/
 router.delete('/categories/:id', categoriesControlleur.deleteOneCategory);
/**
 * routes /tags/
 * view all tags
 **/
 router.get('/tags', tagsControlleur.getAllTags);
 /**
 * routes /tags/
 * Add new tag
 **/
  router.post('/tags', tagsControlleur.save);
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