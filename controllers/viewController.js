const Article = require('../models/Article')

exports.getOverview = async (req, res, next) => {

    const articles = await Article.find();

    try {

        res.status(200).render('base', {
            title: 'All Articles',
            articles: articles
        });

    } catch(err) {

        res.status(400).json({
            err
        });
    }
};

exports.secretRoute = async (req, res, next) => {

    const articles = await Article.find();

    try {

        res.status(200).render('backend', {
            title: 'All Articles',
            articles: articles
        });

    } catch(err) {

        res.status(400).json({
            err
        });
    }
};

exports.createArticleRoute = (req, res, next) => {
    try {
        res.status(200).render('createarticle', {
            title: 'Create Articles'
        })
    } catch (err) {
        res.status(400).json({
            err
        })
    }
};

exports.updateArticleRoute = async (req, res, next) => {

    const article = await Article.findById(req.params.id)

    try {

        res.status(200).render('updatearticle', {
            title: 'Update Articles',
            article: article
        })

    } catch (err) {
        res.status(400).json({
            err
        })
    }
}

exports.logMeIn = (req, res, next) => {
    res.status(200).render('login', {
        title: 'Log in'
    });
}