import express from "express";
import { createBook, getBooks, getBook, updateBook , deleteBook} from "../controllers/book.js";

const router= express.Router();

router.post("/", createBook);
router.get("/" , getBooks);
router.get("/:bookId", getBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default router;