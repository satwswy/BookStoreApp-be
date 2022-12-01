import Book from "../models/Book.js";

export const createBook = async(req,res,next)=>{
    try {
        const book = new Book(req.body);
        const {_id} = await book.save();
        res.status(200).send({_id})
    } catch (error) {
        next(error);
    }
}

