const Card = require('../models/card');

const BadRequestError = require('../errors/bad-req-err.js');
const NotFoundError = require('../errors/not-found-err.js');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const { _id } = req.user;
  Card.create({ name, link, owner: _id })
    .then((card) => res.send({ data: card }))
    // данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.id)
    .orFail()
    .then((card) => {
      if (card.owner.toString() !== req.user._id) {
        throw new BadRequestError({ message: 'Эту карточку создал другой пользователь' });
      }
      Card.findByIdAndRemove(req.params.id)
        .then((card) => res.send({ data: card }))
        .catch((err) => {
          if (err.name === 'CastError' || err.name === 'DocumentNotFoundError') {
            throw new NotFoundError('Карточка с таким id не найдена');
          }
        })
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail()
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'DocumentNotFoundError') {
        throw new NotFoundError('Карточка с таким id не найдена');
      }
    })
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail()
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'DocumentNotFoundError') {
        throw new NotFoundError('Карточка с таким id не найдена');
      }
    })
    .catch(next);
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
