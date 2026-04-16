// dotenv package ko import kar rahe hain (env variables read karne ke liye)
import dotenv from "dotenv";

// dotenv ko initialize kar rahe hain → .env file ko read karega
dotenv.config();

// check kar rahe hain ki MONGOO_URI env me exist karta hai ya nahi
if (!process.env.MONGOO_URI) {
    // agar nahi mila to error throw hoga aur app crash ho jayega
    throw new Error("MONGOO_URI is not defined in environment variables");
}

if(!process.env.JWT_SCRET){
    throw new Error("JWT_SCRET is not defined in environment variables");
}
// ek config object bana rahe hain jisme env variable store karenge
const config = {
    // process.env se MONGOO_URI leke object me daal rahe hain
    MONGOO_URI: process.env.MONGOO_URI,
    JWT_SCRET: process.env.JWT_SCRET
};

// config object ko export kar rahe hain taaki dusri files me use ho sake
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
// Check: MONGOO_URI exist karta hai?
//       ↓             ↓
//      YES            NO
//       ↓              ↓
// Store in config   Throw Error ❌ (App stop)
//       ↓
// Export config
//       ↓
// End