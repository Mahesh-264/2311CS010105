const schedulerService = require("../services/scheduler.service");

const getSchedule = async (req, res) => {
    try {
        const result = await schedulerService.generateSchedule();

        res.status(200).json(result);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getSchedule,
};