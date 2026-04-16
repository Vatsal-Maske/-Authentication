import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";



export async function register(req, res) {


    const { username, email, password } = req.body;

    const isAreadyRegistered = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })


    if (isAreadyRegistered) {
        return res.status(409).json({
            message: "User already registered"
        })
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: user._id,
    }, config.JWT_SCRET,
        {
            expiresIn: "1d"
        })

    res.status(201).json({
        message: "User registered successfully",
        user: {
            username: user.username,
            email: user.email

        },
        token
    })
}