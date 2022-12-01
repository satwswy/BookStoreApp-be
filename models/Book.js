import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {type:String, required:true},
    category:{type:String, required:true},
    desc: { type: String, required: true },
    author: { type: String, required: true },
    price: {type: Number, required: true},
    photo:{type:String}
},{ timestamps: true });

export default mongoose.model("Book", BookSchema);