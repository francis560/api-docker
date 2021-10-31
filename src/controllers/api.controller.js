const UsersController = {};


const UsersData = require('../data/users.json');
const PostData = require('../data/post.json');
const CommentsData = require('../data/comments.json');
const ImagesData = require('../data/images.json');




UsersController.users = (req, res) => {
    res.json(UsersData);
};

UsersController.post = (req, res) => {
    res.json(PostData);
};

UsersController.comments = (req, res) => {
    res.json(CommentsData);
};

UsersController.images = (req, res) => {
    res.json(ImagesData);
};

UsersController.prueba = (req, res) => {
    res.json({
        "Id": 1,
        "message": "Solicitud realizada con éxito"
    });
};





module.exports = UsersController;