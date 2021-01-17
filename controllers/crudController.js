const Article = require('../models/Article');

exports.createOne = async (req, res, next) => {

    const date = Date.now();

    const article = new Article ({
        heading: req.body.heading,
        content: req.body.content,
        imagecover: req.body.imagecover,
        date: date
    });

    try {
        const newArticle = await article.save()
        res.status(200).json({
            data: newArticle
        })
    } catch (err) {
        res.status(400).json({
            err
        });

    };

    next();
    
};

exports.deleteOne = async (req, res, next) => {
    
    const article = await Article.findOneAndDelete({ heading: req.body.heading });

    try {

        if (article) {
            return res.status(200).json({
                message: `Succesfully deleted ${article.heading}`
            });
        };

    } catch (err) {

        res.status(400).json({
            err
        });
    };

    next();
};