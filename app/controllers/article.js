const _ = require('lodash'), mongoose = require('mongoose'), Article = mongoose.model('Article');

const ArticleController = {

  index: async(req, res)=>{
    let articles = await Article.find({});
    res.json(articles);
  },

  newArticles: async (req, res) =>{
    let data = req.body;
    let newArtiles = new Article(data);
    let article = await newArtiles.save();
    res.json(article);
  }

};

module.exports = ArticleController;
