const express = require('express');
const app = express();
const resultRoutes = require('./routes/resultRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware to parse Unity's WWWForm data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', resultRoutes);
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});