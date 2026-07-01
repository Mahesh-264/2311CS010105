const axios = require("axios");

const Log = async (stack, level, packageName, message) => {
  try {
    await axios.post(
      `${process.env.BASE_URL}/logs`,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log("Logger Error:", err.response?.data || err.message);
  }
};

module.exports = Log;