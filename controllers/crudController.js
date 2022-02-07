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
            data: newArticle,
            status:'succes'
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
                message: `Succesfully deleted ${article.heading}`,
                status: 'succes'
            });
        };

    } catch (err) {

        res.status(400).json(err);
    };

    next();
};

exports.updateOne = async (req, res, next) => {
    
    const filter = { _id: req.headers.referer.split('/')[4] };
    const update = { heading: req.body.heading, content: req.body.content };
    
    try {
        let updatedArticle = await Article.findOneAndUpdate(filter, update, {
            new: true
        });

        res.status(200).json({
            message: 'Artiklen blev blev opdateret',
            status: 'succes',
            data: updatedArticle
        });

    } catch(err) {
        res.status(400).json(err);
        console.log(err)
    }

    next();

}