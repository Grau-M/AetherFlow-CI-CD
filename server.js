// server.js
const express = require('express');
const app = express();

// --- Configuration ---
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// --- Mandatory Health Check Endpoint ---
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        environment: NODE_ENV
    });
});

// --- Simple Home Route ---
app.get('/', (req, res) => {
    res.send(`<h1>AetherFlow is running!</h1><p>Environment: ${NODE_ENV}</p><p>Visit <a href="/health">/health</a> to check the status.</p>`);
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});