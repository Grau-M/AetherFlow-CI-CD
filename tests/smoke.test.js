// tests/smoke.test.js
const fetch = require('node-fetch');

// Smoke Test: Quick check to ensure the application starts successfully
describe('Smoke Test', () => {
    // REQUIRED: 1 Smoke Test
    test('Health endpoint returns 200 OK', async () => {
        // Pings the mandatory /health endpoint
        const response = await fetch('http://localhost:3001/health');
        expect(response.status).toBe(200);
    }, 10000); 
});