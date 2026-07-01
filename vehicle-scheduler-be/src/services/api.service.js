const axios = require("../config/axios.config");
const Log = require("../utils/logger");

const getDepots = async () => {
    try {
        // Log API request
        await Log(
            "backend",
            "info",
            "service",
            "Fetching depots from Evaluation API"
        );

        const response = await axios.get("/depots");

        // Log success
        await Log(
            "backend",
            "info",
            "service",
            "Depots fetched successfully"
        );

        return response.data.depots;

    } catch (error) {

        // Log failure
        await Log(
            "backend",
            "error",
            "service",
            `Failed to fetch depots: ${error.message}`
        );

        console.error("DEPOTS ERROR:");
        console.error(error.response?.status);
        console.error(error.response?.data);

        throw new Error(error.response?.data?.message || error.message);
    }
};

const getVehicles = async () => {
    try {
        // Log API request
        await Log(
            "backend",
            "info",
            "service",
            "Fetching vehicles from Evaluation API"
        );

        const response = await axios.get("/vehicles");

        // Log success
        await Log(
            "backend",
            "info",
            "service",
            "Vehicles fetched successfully"
        );

        return response.data.vehicles;

    } catch (error) {

        // Log failure
        await Log(
            "backend",
            "error",
            "service",
            `Failed to fetch vehicles: ${error.message}`
        );

        console.error("VEHICLES ERROR:");
        console.error(error.response?.status);
        console.error(error.response?.data);

        throw new Error(error.response?.data?.message || error.message);
    }
};

module.exports = {
    getDepots,
    getVehicles
};