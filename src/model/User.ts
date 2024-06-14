import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

// userSchema
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerifyfield: boolean;
  verifyCodeExpiry: Date;
  isAceeptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    requried: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email adresss"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "VerfiyCode is required"],
  },
  isVerifyfield: {
    type: Boolean,
    default: false,
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "verfiy code expiry is required"],
  },
  isAceeptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
