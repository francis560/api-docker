const { Router } = require('express');
const { users, post, comments, images, prueba } = require('../controllers/api.controller');
const router = Router();


router.get('/users', users);

router.get('/posts', post);

router.get('/comments', comments);

router.get('/images', images);

router.get('/prueba', prueba);




module.exports = router;