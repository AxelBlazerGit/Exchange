// import mongoose from "mongoose";
const mongoose=require("mongoose")
const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required : true,
            unique: true,
        },password:{
            type: String,
            required : true,
        },name:{
            type: String,
            required : true,
            // unique: true,
        }

    },
    {timestamps: true}
)

export const User = mongoose.model("User",userSchema)