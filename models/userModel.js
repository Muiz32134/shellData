const db = require('../config/db');
const User = {
    findByCredentials: async (username, password) => {
        const [rows] = await pool.execute(
            'SELECT * FROM user_table WHERE user_name = ? AND password = ?',
            [username, password]
        );
        return rows[0];
    }
};

module.exports = User;