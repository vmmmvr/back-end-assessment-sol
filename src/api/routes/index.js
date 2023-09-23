const express = require('express');
const {controllerHandler: c} = require('../../utils');
const postController = require('../controllers/post.controller');

const router = express.Router();
// ping 
router.get("/api/ping", c(postController.ping, (req) => [req.body, req.params]))

// Posts
router.get("/api/posts", c(postController.getPost, (req,res, next) =>  req))

// Importing the router
module.exports=router