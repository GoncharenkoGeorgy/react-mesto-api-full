const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUser, updateProfile, updateAvatar, getLoginUser
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/:id',celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).hex(), // ?доделать
  }),
}), getUser);

// router.post('/users', createUser);

router.patch('/users/me/profile', updateProfile);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().uri(),
  }),
}), updateAvatar);

router.get('/users/me', getLoginUser);

module.exports = router;
