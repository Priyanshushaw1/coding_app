const express = require('express');
const app = express();

require('./config/db'); // Database connection

app.use(express.json()); // Parse JSON bodies first

const userRoutes = require('./routes/user.routes');
app.use('/users', userRoutes); // Mount routes after JSON middleware

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
});

