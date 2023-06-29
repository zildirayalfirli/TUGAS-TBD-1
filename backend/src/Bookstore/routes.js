const { Router } = require('express');
const controller = require ('./controller');

const router = Router();

router.get("/", controller.getBook);
router.post("/", controller.addBook);
router.get("/:id_book", controller.getBookById);
router.put("/:id_book", controller.updateBook)
router.delete("/:id_book", controller.deleteBook)


module.exports = router;