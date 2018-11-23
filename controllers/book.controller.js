const helper = require('../helper.js');
const Book = require('../models/book.model.js')

exports.books = (req, res, next) => {
    Book.find({}, (err, books) => {
        if (err) return next(err);

        let response = helper.formatResponse(req, books)
        res.send(response)
    })
}

exports.book_details = (req, res, next) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) return next(err)
        res.send(book)
    })
}

exports.book_create = (req, res, next) => {

    if (!req.file) {
        console.log("No file received");
        return res.status(400).send({
            success: false,
            message: "No file received"
        });

    } else {
        
        let book = new Book(
            {
                title: req.body.title,
                description: req.body.description,
                image: req.file.path
            }
        );

        book.save()
        .then(data => {
            console.log("Book saved")
 
            let d = []
            d.push(data)

            let response = helper.formatResponse(req, d)
            res.status(201).send(response)
        })
        .catch(err => {
            res.status(500).send({
                success: false,
                message: "Could not process your petition"
            })
        })

    }
};

exports.book_update = (req, res, next) => {
    req.body.image = req.file.path

    Book.findByIdAndUpdate(req.params.id, {$set: req.body}, err => {
        if (err) return next(err)

        let d = []
        d.push(req.body)

        let response = helper.formatResponse(req, d)
        res.status(200).send(response)
    });
}

exports.book_delete = (req, res, next) => {
    Book.findByIdAndRemove(req.params.id, err => {
        if (err) return next(err)
        res.send('Deleted successfully!')
    })
}
