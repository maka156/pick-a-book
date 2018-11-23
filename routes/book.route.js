
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
router.post('/create', upload.single('book'), book_controller.book_create);

/**
 * PUT requests
 */
router.put('/:id/update', upload.single('book'),book_controller.book_update);

/**
 * DELETE requests
 */
router.delete('/:id/delete', book_controller.book_delete);


module.exports = router;