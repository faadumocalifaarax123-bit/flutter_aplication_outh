import mongoose from "mongoose";


 const conectDb = async()=>{
    try{
        const conn = mongoose.connect("mongodb+srv://faadumocali:2025@cluster0.cqwipbu.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0");
        console.log ("database connected successfully");

    } catch(error){
        console.log (error);
    }
}

export default conectDb