const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUser, updateProfile, updateAvatar, getLoginUser
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/:id',celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24), // ?доделать
  }),
}), getUser);

// router.post('/users', createUser);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateProfile);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().uri(),
  }),
}), updateAvatar);

router.get('/me', getLoginUser);

module.exports = router;
