import mongoose from "mongoose"
import 'dotenv'
const connectdb = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://Admin:meet@cluster0.d9dv9cl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Mongodb Connexted")
    }catch(error)
    {
        console.log(error)
    }
    
}

export default connectdb;
