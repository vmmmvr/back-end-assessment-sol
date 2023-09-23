const {getPostService} = require("../services/post.service");
const { querySelector ,sortingFunc} = require("./helper");

const ping = async (res) => {
 
  res.status(200);
  return res.json(  { sucess: true }) 
};

const getPost = async (res, query, params, body) => {
    // check if all the required paramters exist
   const {nonExist} = querySelector(query);
    if(nonExist.length > 0) {
        res.status(400);
        return res.json({
            error: `${nonExist.toString()} parameter is required`
        });
    }
    const {posts}=await getPostService();
 
  const taggedPosts = posts.filter((post) => post.tags.includes(query["tags"]));
  
  res.status(200);
  return res.json({
    posts: await sortingFunc(taggedPosts, query["sortBy"], query["direction"]),
  }) 
};


module.exports = {
  ping,
  getPost,
};
