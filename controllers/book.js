import BookModel from "../models/Book.js";
import createError from "http-errors"

export const createBook = async(req,res,next)=>{
    try {
        const book = new BookModel(req.body);
        const {_id} = await book.save();
        res.status(200).send({_id})
    } catch (error) {
        next(error);
    }
}

export const getBooks = async (req,res,next)=>{
    try {
        const books = await BookModel.find();
        res.send(books)
    } catch (error) {
        next(error)
    }
}

export const getBook = async (req,res,next)=>{
    try {
        const foundBook = await BookModel.findById(req.params.bookId)
        if(foundBook){
            res.send(foundBook)
        } else{
            next(createError(404,`Book with id ${req.params.bookId} not found`))
        }
    } catch (error) {
        next(error)
    }
}

export const updateBook = async (req,res,next)=>{
    try {
        const updateBook = await BookModel.findByIdAndUpdate(
            req.params.bookId,
            req.body,
            { new: true, runValidators: true })
            if (updateBook){
                res.send(updateBook)
            }else{
                next(createError(404,`Book with id ${bookID} not found`))
            }
    } catch (error) {
        next(error)
    }
}

export const deleteBook = async (req,res,next)=>{
    try {
        const deleteBook = await BookModel.findByIdAndDelete(req.params.bookId)
        if(deleteBook){
            res.send("Book Deleted")
        }else{
            next(createError(404,`Book with id${req.params.bookId} not found`))
        }
    } catch (error) {
        next(error)
    }
}