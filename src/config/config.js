import dotenv from "dotenv";

dotenv.config();


if(!process.env.MONGOO_URI){
    throw new Error("MONGOO_URI is not defined in environment variables");
}
const config={
    MONGOO_URI:process.env.MONGOO_URI
}

export default config;

// Start
//   ↓
// Import dotenv package
//   ↓
// Call dotenv.config()
//   ↓
// .env file read hoti hai
//   ↓
// Environment variables load hote hain
//   ↓
// process.env.MONGOO_URI access hota hai
//   ↓
// config object me store hota hai
//   ↓
// config export hota hai
//   ↓
// End