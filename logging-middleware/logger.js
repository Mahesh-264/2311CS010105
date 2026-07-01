import axios from "axios";
import config from "./config.js";

export async function Log(stack, level, packageName, message) {

    const body = {
        stack,
        level,
        package: packageName,
        message
    };

    try {
        const response = await axios.post(
            config.api,
            body,
            {
                headers: {
                    Authorization: `Bearer ${config.token}`,
                    "Content-Type": "application/json"
                },
                timeout: 10000
            }
        );

        console.log("SUCCESS:");
        console.log(response.status);
        console.log(response.data);

        return response.data;

  } catch (err) {

    console.log("========== ERROR ==========");

    if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Response:", err.response.data);
    } else {
        console.log("Message:", err.message);
    }

    console.log("===========================");

    throw err;
}
}