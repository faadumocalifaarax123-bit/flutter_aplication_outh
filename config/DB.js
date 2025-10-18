import mongoose from "mongoose";



 const conectDb = async()=>{
    try{
     mongoose.connect(process.env.MONGU_URL);
        console.log ("database connected successfully");

    } catch(error){
        console.log (error);
    }
}

export default conectDb