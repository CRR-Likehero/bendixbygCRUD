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

        console.log(err)
    }
};

exports.logMeIn = (req, res) => {
    res.status(200).render('login', {
        title: 'Log in'
    });
}

exports.secretRoute = (req, res) => {
    res.status(200).render('secret', {
        title: 'secret'
    })
}