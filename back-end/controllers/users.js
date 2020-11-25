const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const BadRequestError = require('../errors/bad-req-err.js');
const ConflictError = require('../errors/conflict-err.js');
const NotFoundError = require('../errors/not-found-err.js');

const { JWT_SECRET } = process.env;

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

const getUser = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }
      return res.send(user);
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  console.log(req);
  const {
    name, about, avatar, email, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user) => res.send({ data: user }))
    // данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else if (err.name === 'MongoError') {
        throw new ConflictError('Пользователь с таким email уже зарегистрирован');
      }
    })
    .catch(next);
};

const updateProfile = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      res.send({ token: jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' }) });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

const getLoginUser = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
    User.findById(payload._id)
      .then((user) => {
        if (user === null) {
          throw new NotFoundError('Пользователь не найден');
        } else {
          res.send({
            _id: user._id,
            email: user.email,
            name: user.name,
            about: user.about,
            avatar: user.avatar,
          });
        }
      })
      .catch(next);
  } catch (err) {
    return res.status(401).send({ message: 'Необходима авторизация' });
  }
}

module.exports = {
  getUsers, getUser, createUser, updateProfile, updateAvatar, login, getLoginUser,
};
