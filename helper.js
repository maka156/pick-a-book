const helper = {
    formatResponse: function(req, books) {

        let n = books.map( book => {

            return {
                id: book._id,
                title: book.title,
                description: book.description,
                image: book.image.replace("public", req.protocol + '://' + req.get('host'))
            }
            
        });

        return n;
    }
}

module.exports = helper;