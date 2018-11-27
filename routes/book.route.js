const express = require('express');
const router = express.Router();
const upload = require('../imgHandler');

const book_controller = require('../controllers/book.controller');

/**
 * GET requests
 */
router.get('/', book_controller.books);
router.get('/:id', book_controller.book_details);

/**
 * POST requests
 */
router.post('/books', upload.single('book'), book_controller.book_create);

/**
 * PUT requests
 */
router.put('/books/:id', upload.single('book'),book_controller.book_update);

/**
 * DELETE requests
 */
router.delete('/books/:id', book_controller.book_delete);

module.exports = router;