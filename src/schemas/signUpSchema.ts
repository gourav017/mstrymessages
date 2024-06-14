import {z} from "zod";

export const userNameValidation = z
    .string()
    .min(2,"Username must be atleast 2 characters")
    .max(20,"Username must be atleast 20 characters")

 export const userSignupSchema = z.object({
    username:userNameValidation,
    email:z.string().email({message:"Invalid email addresss"}),
    password:z.string().min(6,{message:"passowrd must be at least 6 characters"})
 })   

