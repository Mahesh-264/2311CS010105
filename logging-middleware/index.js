import { Log } from "./logger.js";
import config from "./config.js";

// Check whether .env is loading correctly
console.log("Configuration:");
console.log(config);

async function test() {
    try {

        // Test Log 1
        const log1 = await Log(
            "backend",
            "info",
            "handler",
            "Server Started Successfully"
        );

        console.log("Log 1 Response:");
        console.log(log1);

        // Test Log 2
        const log2 = await Log(
            "backend",
            "error",
            "db",
            "Database Connection Failed"
        );

        console.log("Log 2 Response:");
        console.log(log2);

    } catch (err) {
        console.error("Error while testing logger:");
        console.error(err);
    }
}

test();