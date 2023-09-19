

const router =require("express").Router();
const Controller = require('../controllers/bookController.js');
const { checkBookOwner } = require('../middlewares/checkBookOwner');


router.post("/add-book",Controller.addBook);
router.get('/view',Controller.getAllBooks);

// Update a book
router.put('/view/:_id',Controller.updateBook);

// Delete a book
router.delete('/view/:_id',Controller.deleteBook);
module.exports = router;