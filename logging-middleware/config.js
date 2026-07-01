import dotenv from "dotenv";

dotenv.config();

export default {
    api: process.env.LOG_API,
    token: process.env.ACCESS_TOKEN
};