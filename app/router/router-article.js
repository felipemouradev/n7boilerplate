const express = require('express'),
  router = express.Router(),
  ArticleController = require('../controllers/article');

module.exports = function (app) {
  app.use('/article', router);
};

router.get('/', ArticleController.index);
router.post('/', ArticleController.newArticles);