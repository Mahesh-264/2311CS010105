function knapsack(tasks, maxHours) {
    const n = tasks.length;

    const dp = Array.from({ length: n + 1 }, () =>
        Array(maxHours + 1).fill(0)
    );

    // Build DP table
    for (let i = 1; i <= n; i++) {
        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let h = 0; h <= maxHours; h++) {

            if (duration <= h) {

                dp[i][h] = Math.max(
                    impact + dp[i - 1][h - duration],
                    dp[i - 1][h]
                );

            } else {

                dp[i][h] = dp[i - 1][h];

            }
        }
    }

    // Backtrack to find selected tasks
    const selectedTasks = [];

    let h = maxHours;

    for (let i = n; i > 0; i--) {

        if (dp[i][h] !== dp[i - 1][h]) {

            selectedTasks.push({
                taskId: tasks[i - 1].TaskID,
                duration: tasks[i - 1].Duration,
                impact: tasks[i - 1].Impact
            });

            h -= tasks[i - 1].Duration;
        }
    }

    selectedTasks.reverse();

    const totalDuration = selectedTasks.reduce(
        (sum, task) => sum + task.duration,
        0
    );

    return {
        selectedTasks,
        totalDuration,
        totalImpact: dp[n][maxHours]
    };
}

module.exports = knapsack;