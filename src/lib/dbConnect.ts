import mongoose, { mongo } from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to dababase");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});

    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected sucessfully");

  }
   catch (error) {

    console.log("DB Connection fail");
    process.exit(1);
  }
}

export default dbConnect;
