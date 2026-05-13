const Result = require('../models/resultModel');
exports.uploadResult = async (req, res) => {
    try {
        // 1. Capture and Sanitize (matching PHP ?? null logic)
        const user = req.body.username || null;
        const q1 = req.body.q1 || '';
        const q2 = req.body.q2 || '';
        const q3 = req.body.q3 || '';
        const q4 = req.body.q4 || '';
        const score = req.body.total_score || 0;
        const examTime = req.body.exam_time || '';
        if (!user) {
            return res.status(200).send("Error: Username is required.");
        }
        // 2. FETCH THE UNIQUE ID
        const userRow = await Result.findUserIdByName(user);
        if (!userRow) {
            return res.status(200).send(`Error: User '${user}' not found in database.`);
        }
        const unique_id = userRow.id;
        // 3. INSERT INTO results
        await Result.save({
            unique_id,
            username: user,
            q1, q2, q3, q4,
            total_score: score,
            exam_time: examTime
        });
        // Matching your PHP success output: Success|ID:XX
        res.status(200).send(`Success|ID:${unique_id}`);
    } catch (error) {
        console.error(error);
        res.status(200).send("Error: " + error.message);
    }
};