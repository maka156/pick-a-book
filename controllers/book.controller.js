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
        if (err) return next(err);
        res.send(book);
    })
}

exports.book_create = (req, res, next) => {

    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        
        let book = new Book(
            {
                title: req.body.title,
                description: req.body.description,
                image: req.file.path
            }
        );

        book.save(err => {
            if (err) return next(err);

            console.log("Book saved")
 
            let data = []
            data.push(book)

            let response = helper.formatResponse(req, data)
            res.send(response)
        })

    }
};

exports.book_update = (req, res, next) => {
    Book.findOneAndUpdate(req.params.id, {$set: req.body}, err => {
        if (err) return next(err);
        res.send('Book udpated.');
    });
}

exports.book_delete = (req, res, next) => {
    Book.findByIdAndRemove(req.params.id, err => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
}
