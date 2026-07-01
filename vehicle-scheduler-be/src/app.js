const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const schedulerRoutes = require("./routes/scheduler.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Vehicle Scheduler API Running 🚗"
    });
});

app.use("/api", schedulerRoutes);

module.exports = app;