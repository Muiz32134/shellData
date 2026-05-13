const db = require('../config/db');

const Result = {
    // Logic from your PHP: SELECT id FROM user_table WHERE user_name = ?
    findUserIdByName: async (username) => {
        const [rows] = await db.execute(
            'SELECT id FROM user_table WHERE user_name = ? LIMIT 1', 
            [username]
        );
        return rows[0]; // Returns the first row or undefined
    },
    // Logic from your PHP: INSERT INTO results
    save: async (data) => {
        const query = `
            INSERT INTO results (unique_id, username, q1, q2, q3, q4, total_score, exam_time) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.unique_id,
            data.username,
            data.q1,
            data.q2,
            data.q3,
            data.q4,
            data.total_score,
            data.exam_time
        ];
        return db.execute(query, values);
    }
};

module.exports = Result;