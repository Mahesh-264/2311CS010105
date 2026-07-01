const apiService = require("./api.service");
const knapsack = require("../algorithms/knapsack");
const Log = require("../utils/logger");

const generateSchedule = async () => {

    try {

        await Log(
            "backend",
            "info",
            "service",
            "Generating vehicle maintenance schedule"
        );

        const depots = await apiService.getDepots();
        const vehicles = await apiService.getVehicles();

        const schedule = depots.map((depot) => {

            const result = knapsack(
                vehicles,
                depot.MechanicHours
            );

            return {
                depotId: depot.ID,
                mechanicHours: depot.MechanicHours,
                selectedTasks: result.selectedTasks,
                totalDuration: result.totalDuration,
                totalImpact: result.totalImpact
            };
        });

        await Log(
            "backend",
            "info",
            "service",
            "Schedule generated successfully"
        );

        return {
            success: true,
            schedule
        };

    } catch (error) {

        await Log(
            "backend",
            "error",
            "service",
            error.message
        );

        throw error;
    }
};

module.exports = {
    generateSchedule
};